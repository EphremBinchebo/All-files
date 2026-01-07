# EngageAI Backend

## Overview
Spring Boot backend for EngageAI. Uses MySQL and provides:
- JWT auth (register/login)
- Campaign CRUD
- Social OAuth endpoints (Instagram, TikTok) - placeholders for token exchange
- Scheduler service (auto-post mock)

## Setup
1. Start MySQL (see docker-compose in parent folder).
2. Update `src/main/resources/application.properties` if needed.
3. Build: `mvn clean package`
4. Run: `java -jar target/engageai-backend-0.0.1-SNAPSHOT.jar`

JWT secret generated for you: vUg96T_65BRoao8zojWGMAH8ypU3BTbfZZ5fB0eJ-_k

## Notes
- Replace OAuth placeholders in application.properties with real credentials.
- Implement token exchange in SocialAuthController where TODO comments exist.
