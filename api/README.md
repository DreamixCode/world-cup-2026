# World Cup 2026 — Betting API

A Spring Boot REST API for a football tournament betting app. Users authenticate via Google OAuth2, browse fixtures and group standings, place score predictions, and earn points when results come in.

---

## Domain Entities

| Collection  | Class                   | Description                                                                                                      |
| ----------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `fixtures`  | `FixtureDocument`       | A football match — teams, date/time, status, score, league. Sourced from the Football API or bundled JSON files. |
| `standings` | `GroupStandingDocument` | Per-team group-stage standing with rank, points, goal difference and home/away/overall stats.                    |
| `bets`      | `BetDocument`           | A user's home/away score prediction for a match. Stores earned `points` once `isCalculated = true`.              |
| `users`     | `UserDocument`          | An authenticated user (Google `sub` as ID). Created/updated automatically on first login.                        |

---

## Architecture Overview

```
REST Controllers (/api/*)
 ├── BetController        — place and retrieve bets
 ├── MatchController      — list fixtures
 └── StandingController   — group standings

Security
 └── Google OAuth2 JWT (Bearer token required on all /api/* endpoints)
 └── UserDocument upserted on every authenticated request

External Data (two swappable adapters per resource)
 ├── *ApiAdapter          (active by default)      — calls api-sports.io via Feign
 └── *FileRetrievalAdapterImpl  (profile: mock-data) — reads bundled JSON from resources/

Scheduled Jobs
 ├── Match retrieval  — cron, updates fixtures collection
 └── Standing retrieval — cron, updates standings collection

Event Flow
 └── Fixture update → MatchEventsPublisher → bet point calculator
```

---

## Prerequisites

- **Java 21**
- **Podman + podman compose** (for MongoDB)
- **Node.js + npm** (for UI)
- A **Google OAuth2 Client ID** (resource server / audience)
- A **[api-sports.io](https://api-sports.io) API key** — _or_ activate the `mock-data` profile to use bundled JSON files (see below)

---

## Running Locally (Verified)

### 1. Start MongoDB (Podman)

```bash
cd api
podman compose down
podman compose up -d
podman compose ps
```

This starts:

- **MongoDB 8.3** on `localhost:27017` (credentials: `root` / `wc-dreamix`)
- **Mongo Express** at `http://localhost:8081` (user: `root`, pass: `pass`)

### 2. Start the backend API

For local no-quota testing, use `mock-data` profile:

```bash
cd api
GOOGLE_OAUTH2_CLIENT_ID=your-google-client-id \
CORS_ALLOWED_ORIGINS=http://localhost:5173 \
./mvnw spring-boot:run -Dspring-boot.run.profiles=mock-data
```

Verify API health:

```bash
curl http://localhost:8080/actuator/health
```

### 3. Start the UI

```bash
cd ui
VITE_GOOGLE_CLIENT_ID=your-google-client-id npm run dev -- --host 0.0.0.0 --port 5173
```

Open `http://localhost:5173`.

### 4. Environment variables

```bash
# Required
GOOGLE_OAUTH2_CLIENT_ID=your-google-client-id
VITE_GOOGLE_CLIENT_ID=your-google-client-id

# API optional (defaults shown)
MONGODB_URI=mongodb://root:wc-dreamix@localhost:27017/euro2026?authSource=admin
MONGODB_DATABASE=euro2026
FOOTBALL_API_KEY=
FOOTBALL_API_LEAGUE_ID=1
FOOTBALL_API_SEASON=2026
CORS_ALLOWED_ORIGINS=http://localhost:5173
SCHEDULER_ENABLED=false
```

### 5. Troubleshooting

If `podman compose up -d` fails with `Wrong mongod version` / `featureCompatibilityVersion`:

```bash
cd api
podman compose down -v
podman compose up -d
```

This removes old DB files created by a different Mongo major version.

### 6. Using live Football API data (consumes quota)

Start backend without `mock-data` and set `FOOTBALL_API_KEY`:

```bash
cd api
GOOGLE_OAUTH2_CLIENT_ID=your-google-client-id \
FOOTBALL_API_KEY=your-api-football-key \
CORS_ALLOWED_ORIGINS=http://localhost:5173 \
./mvnw spring-boot:run
```

### 7. Stop local services

```bash
cd api
podman compose down
```

### 8. Using bundled seed data (no API key needed)

Activate the `mock-data` Spring profile. The file-based adapters will load `season2022/fixtures.json` and `season2022/standings.json` from the classpath instead of calling the live API.

**Terminal / Maven:**

```bash
./mvnw spring-boot:run -Dspring-boot.run.profiles=mock-data
```

**Environment variable:**

```bash
export SPRING_PROFILES_ACTIVE=mock-data
./mvnw spring-boot:run
```

**IntelliJ IDEA:**

1. Open **Run → Edit Configurations…**
2. Select (or create) your Spring Boot run configuration.
3. In the **Active profiles** field enter `mock-data`.
4. Click **OK** and run.

---

## Deployment Checklist (for UI integration)

| Variable                  | What to set                                           |
| ------------------------- | ----------------------------------------------------- |
| `GOOGLE_OAUTH2_CLIENT_ID` | The same Google Client ID the UI uses to issue tokens |
| `MONGODB_URI`             | Production MongoDB connection string                  |
| `CORS_ALLOWED_ORIGINS`    | The deployed UI URL (e.g. `https://myapp.com`)        |
| `FOOTBALL_API_KEY`        | api-sports.io key                                     |
| `SCHEDULER_ENABLED`       | `true` to auto-refresh fixtures and standings         |

All `/api/**` endpoints require `Authorization: Bearer <google-id-token>` — the UI must pass the Google ID token on every request.

### Docker

```bash
# Build image
docker build -t wc-api .

# Run
docker run -p 8080:8080 \
  -e GOOGLE_OAUTH2_CLIENT_ID=... \
  -e MONGODB_URI=... \
  -e FOOTBALL_API_KEY=... \
  -e CORS_ALLOWED_ORIGINS=https://myapp.com \
  -e SCHEDULER_ENABLED=true \
  wc-api
```
