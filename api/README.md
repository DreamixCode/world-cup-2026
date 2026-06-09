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
- **Docker + Docker Compose** (for MongoDB)
- A **Google OAuth2 Client ID** (resource server / audience)
- A **[api-sports.io](https://api-sports.io) API key** — _or_ activate the `mock-data` profile to use bundled JSON files (see below)

---

## Running Locally

### 1. Start MongoDB

```bash
docker compose up -d
```

This starts:

- **MongoDB** on `localhost:27017` (credentials: `root` / `wc-dreamix`)
- **Mongo Express** at `http://localhost:8081` (user: `root`, pass: `pass`)

### 2. Set environment variables

Copy the block below, fill in your values and export them before starting the app:

```bash
# Required
export GOOGLE_OAUTH2_CLIENT_ID=your-google-client-id

# Optional — defaults shown
export MONGODB_URI=mongodb://root:wc-dreamix@localhost:27017/euro2026?authSource=admin
export MONGODB_DATABASE=euro2026

export FOOTBALL_API_KEY=           # leave empty to use file-based adapter instead
export FOOTBALL_API_LEAGUE_ID=1
export FOOTBALL_API_SEASON=2026

export CORS_ALLOWED_ORIGINS=http://localhost:3000   # set to your UI's URL

export SCHEDULER_ENABLED=false
export SCHEDULER_MATCH_CRON="0 */30 12-23 * * *"
export SCHEDULER_STANDING_CRON="0 0 0 * * *"
```

### 3. Run the application

```bash
./mvnw spring-boot:run
```

Swagger UI: `http://localhost:8080/swagger-ui.html`

### 4. Using bundled seed data (no API key needed)

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
