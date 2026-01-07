# EngageAI - Production Starter Package

This package contains a starter Backend (Spring Boot + Maven), Frontend (React + Vite), and Docker Compose to run the full stack locally.

## Quickstart (Docker)
1. Ensure Docker is installed.
2. From the root of this package run:
   ```bash
   docker-compose up --build
   ```
3. Backend: http://localhost:8080
   Frontend: http://localhost:5173

## Notes
- JWT secret is auto-generated and set in backend application.yml: g2Y6IJDwRDnoT6fgXpHSLN_89vA1PBnaGzHzBQFdp6k
- Replace Instagram/TikTok client IDs/secrets in `backend/src/main/resources/application.yml` after registering apps.
- This starter uses mock token responses for OAuth callbacks; implement real token exchange in `SocialAuthController`.
