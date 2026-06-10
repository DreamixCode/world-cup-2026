# World Cup 2026

Internal betting app for World Cup 2026. React frontend served via S3 + CloudFront. Spring Boot backend running in Podman on an EC2 instance.

---

## Architecture

```
Browser
  │
  ├─► CloudFront (https://worldcup2026.dreamixsoft.com)
  │       └─► S3 bucket  (static React build)
  │
  └─► Caddy  (https://35-156-215-22.sslip.io)   ← EC2 35.156.215.22
          └─► Spring Boot API  (internal, port 8080)
                  └─► MongoDB  (internal, port 27017)
```

- Caddy terminates TLS and auto-issues/renews a Let's Encrypt certificate via sslip.io.
- MongoDB and the API are not exposed outside the VM — only Caddy's ports 80/443 are open.

---

## Backend deployment (EC2)

### Prerequisites on the VM

- `docker` and `docker-compose`
- `git`
- Ports **80** and **443** open inbound in the EC2 Security Group (required for Let's Encrypt HTTP-01 challenge and live traffic)

### First-time setup

```bash
# SSH into the VM
ssh ec2-user@35.156.215.22

# Clone the repository
git clone <repo-url> world-cup-2026
cd world-cup-2026/api

# Create the secrets file from the template
cp .env.example .env
```

Edit `.env` and fill in the two required values:

| Variable                  | Where to get it                                               |
| ------------------------- | ------------------------------------------------------------- |
| `GOOGLE_OAUTH2_CLIENT_ID` | Google Cloud Console → Credentials → your OAuth 2.0 Client ID |
| `FOOTBALL_API_KEY`        | RapidAPI dashboard → API-Football subscription                |

```bash
# Build the image and start the stack
docker compose --env-file .env -f docker-compose.prod.yml up -d --build
```

Caddy will automatically obtain a TLS certificate for `35-156-215-22.sslip.io` on first startup. This requires port 80 to be reachable from the internet.

Verify the stack is up:

```bash
docker compose -f docker-compose.prod.yml ps
curl https://35-156-215-22.sslip.io/actuator/health
```

### Subsequent deployments

```bash
ssh ec2-user@35.156.215.22
cd world-cup-2026

git pull

cd api
docker compose --env-file .env -f docker-compose.prod.yml up -d --build api
```

Only the `api` service is rebuilt — MongoDB and Caddy (including its stored certificate) are left running.

### Viewing logs

```bash
# All services
docker compose -f docker-compose.prod.yml logs -f

# API only
docker compose -f docker-compose.prod.yml logs -f api
```

### Stopping the stack

```bash
docker compose -f docker-compose.prod.yml down
```

To also delete persisted data (database, certs): add `--volumes`. **This is destructive.**

---

## Frontend deployment (S3 + CloudFront)

### Prerequisites locally

- Node.js 20+
- AWS CLI v2

### AWS credentials setup

The Dreamix AWS account uses SSO — there are no long-term IAM access keys. Credentials are short-lived (~1 hour) and must be refreshed each session.

1. Go to `https://dreamix.awsapps.com/start/#/?tab=accounts`
2. Click your account → click **Access keys** next to `AdministratorAccess`
3. Copy the values shown and paste them into `~/.aws/credentials`:

```ini
[word-cup-26]
aws_access_key_id     = ASIA...
aws_secret_access_key = ...
aws_session_token     = ...
```

When the credentials expire, repeat steps 1–3 (the file already exists — just overwrite the three values).

### Build

The production values are committed in `ui/.env.production` and are picked up automatically by `vite build`.

```bash
cd ui
npm ci
npm run build
# Output is in ui/dist/
```

### Deploy to S3

```bash
aws s3 sync dist/ s3://dreamix-worldcup-bucket --delete --profile word-cup-26
```

S3 bucket ARN: `arn:aws:s3:::dreamix-worldcup-bucket`

### Invalidate CloudFront cache

After uploading new files, invalidate the CDN cache so users get the latest build immediately:

```bash
aws cloudfront create-invalidation \
  --distribution-id E1SNI95NIHJ3RV \
  --paths "/*" \
  --profile word-cup-26
```

### CloudFront SPA routing (one-time console setting)

React Router handles navigation client-side. Without this setting, direct links (e.g. `worldcup2026.dreamixsoft.com/matches/42`) return a CloudFront error.

In the CloudFront Console → your distribution → **Error pages**:

- HTTP error code **403** → Response page `/index.html`, HTTP response code **200**
- HTTP error code **404** → Response page `/index.html`, HTTP response code **200**

---

## Environment variable reference

### Backend (`api/.env` on the VM)

| Variable                  | Required | Default | Description                                            |
| ------------------------- | -------- | ------- | ------------------------------------------------------ |
| `GOOGLE_OAUTH2_CLIENT_ID` | Yes      | —       | Google OAuth2 client ID; used to validate JWT audience |
| `FOOTBALL_API_KEY`        | Yes      | —       | API-Football key from RapidAPI                         |
| `MONGO_PASSWORD`          | Yes      | —       | MongoDB root password                                  |

### Frontend (`ui/.env.production`, committed)

| Variable                | Value                                |
| ----------------------- | ------------------------------------ |
| `VITE_GOOGLE_CLIENT_ID` | Same Google client ID as above       |
| `VITE_API_URL`          | `https://35-156-215-22.sslip.io/api` |

---

## Local development

```bash
# Start MongoDB (and mongo-express on :8081 for inspection)
cd api
docker compose up -d

# Start the API
./mvnw spring-boot:run

# Start the frontend dev server (proxies /api → localhost:8080)
cd ui
npm install
npm run dev
```

The dev server reads `VITE_GOOGLE_CLIENT_ID` from `ui/.env.local` (gitignored). Copy `ui/.env.example` to `ui/.env.local` and fill it in.
