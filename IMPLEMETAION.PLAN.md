# World Cup 2026 App - Implementation Plan

Goal: make the app runnable end-to-end with aligned UI/backend contracts, prioritizing user profile functionality, then champion/top-scorer features.

Constraints:

- Keep PRs small, mergeable, and independently testable.
- Preserve existing behavior where possible.
- API-Sports quota is limited (100 requests/day): default to local/mock flows for development and only call external APIs when needed.
- Production DB target: MongoDB on `localhost:27017`.
- Local development DB: run MongoDB in Podman (compose-compatible) using `api/docker-compose.yml`.
- New feature delivery rule: each feature PR must be vertical (API + persistence + business logic + UI wiring when applicable).
- Confirmed provider ID mapping: API-Football league id for World Cup is `1`.

## External Provider Reality Check (api-football)

Validated with live probe calls (quota-aware):

- `GET /players/topscorers?league=4&season=2024` returns valid data with shape:
  - root: `get`, `results`, `paging`, `response[]`
  - per row: `player`, `statistics[]`, `statistics[0].team`, `statistics[0].goals`, `statistics[0].games`
- `GET /odds?league=4&season=2024` returned `results: 0` for tested parameters.

Implication:

- Top-scorer feature is implementable via provider data.
- Champion feature must be treated as "data availability dependent" until a provider endpoint/market is verified for WC winner-style data.
- If champion source is unavailable, keep UI route visible and return explicit backend feature-unavailable contract.

## PR-00 - Documentation + Environment Baseline

Scope:

- Add concise setup guide README at repo root (or update existing root-level guide if present).
- Document all required env vars for API and UI.
- Add step-by-step local run instructions and smoke test checklist.
- Add admin note for Google OAuth internal-org restriction.
- Add TODO note for backend claim-based employee enforcement.
- Normalize docs terminology to World Cup 2026 (instead of euro2024 naming).

Deliverables:

- README with:
  - prerequisites
  - variables table (value source + owner)
  - local startup sequence
  - smoke test steps
  - security notes/TODOs

Acceptance:

- A new engineer can follow README and run UI + API locally.
- No secrets committed.

## PR-01 - User Profile Vertical Slice (Top Priority)

Scope:

- Implement backend `GET /api/users/{id}` endpoint.
- Implement/update persistence and service aggregation required by the endpoint.
- Rewire user page UI (`/user/:id`) to consume live endpoint.
- Endpoint returns profile data needed by user page, including:
  - user identity (id, firstName, lastName, email, picture)
  - total points
  - user bets enriched with match details (teams/date/status/score) for UI rendering
- Keep endpoint under existing JWT protection (`/api/**`).

Suggested backend structure:

- `UserController` (new)
- `UserService` (new interface + impl)
- `UserProfileDto` (new)
- Reuse existing repositories (`UserRepository`, `BetRepository`, `FixtureRepository`) and existing DTO/value objects where possible.

Acceptance:

- `GET /api/users/{id}` returns 200 with full payload for existing user.
- Returns 404 for unknown user.
- Visiting `/user/:id` loads data from backend endpoint.
- No frontend call to non-existing endpoint for user page.
- API and UI builds succeed.

## PR-02 - Core Betting Screens Vertical Alignment (Matches/Groups/Standings/Bets)

Scope:

- Re-enable query hooks in the main screens currently using const mocks:
  - groups, matches, leaderboard, match details, bets-related displays.
- Fix query contract bugs where hooks pass params but API methods ignore them.
- Ensure UI only calls backend-supported endpoints for these features.

Acceptance:

- Core routes render from live backend data.
- Place/edit bet flow works against API.
- No 404s for core betting endpoints.

## PR-03 - World Cup 2026 Config + Runtime Baseline

Scope:

- Update backend defaults and naming to World Cup 2026-friendly values:
  - Mongo DB default name
  - football league/season defaults
  - docs/scripts references
- Ensure compose setup is current and podman-friendly for local Mongo startup.
- Keep env overrides intact.

Acceptance:

- App defaults no longer reference euro2024/euro2020 as primary config.
- API still starts with explicit env overrides.

## PR-04 - Top-Scorer Vertical Slice

Scope:

- Implement `/api/topscorer` end-to-end:
  - external adapter mapping from provider payload
  - persistence model for user top-scorer picks
  - business rules (one pick per user, update semantics)
  - UI integration for list + select
- Implement quota-safe behavior (caching / bounded refresh).

Acceptance:

- Top-scorer route works with live backend data.
- User selections persist and can be retrieved consistently.

## PR-05 - Champion Vertical Slice (Availability-Driven)

Scope:

- Attempt champion implementation with provider-backed data source.
- If provider data source is not viable, implement explicit backend response contract indicating unavailability.
- Keep champion page visible and render clear unavailable/coming-soon state from backend contract.

Acceptance:

- No broken calls or uncaught errors on champion route.
- Behavior is explicit and deterministic whether feature is active or unavailable.

## PR-06 - Documentation + Hardening + TODOs

Scope:

- Finalize concise README guide (variables + source/owner + startup + smoke tests).
- Add admin note for Google OAuth internal-organization restriction.
- Add TODO scaffolding (and optional implementation plan) for backend claim-based domain enforcement.
- Add minimal automated tests for new user endpoint and key UI data hooks.
- Validate CORS + auth behavior for local and deployed origins.

Acceptance:

- Critical new flows have baseline tests.
- TODOs are explicit and trackable.

---

## Execution Order

1. PR-00
2. PR-01
3. PR-02
4. PR-03
5. PR-04
6. PR-05
7. PR-06

## API Request Budget Strategy (100/day)

- Default local development to mock-data profile where possible.
- Use manual refresh for external data ingestion.
- Avoid frequent polling jobs in development.
- Prefer caching of champion/top-scorer source responses.

## Immediate Next Action

- Finalize PR-01 vertical user slice (backend + UI) and prepare commit split.
