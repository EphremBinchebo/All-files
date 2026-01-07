# SmartAI Engage - Starter Project

This starter contains a minimal Spring Boot backend (configured for PostgreSQL) and a React frontend (Vite).

## Backend
- Java 17, Spring Boot
- Configure database in backend/src/main/resources/application.properties
- Build with Maven:
  - `cd backend && mvn clean package`
  - Run: `java -jar target/smartai-engage-backend-0.0.1-SNAPSHOT.jar`

## Frontend
- `cd frontend`
- `npm install`
- `npm run dev`

## Notes
- JWT secret and OpenAI key are placeholders in application.properties
- OpenAiService is a placeholder that you can implement with the official OpenAI SDK or HTTP client.
