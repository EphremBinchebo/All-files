FROM eclipse-temurin:17-jdk-jammy
WORKDIR /app
COPY pom.xml mvnw* ./
# If full build needed, user will build via maven locally or in CI
COPY src ./src
RUN apt-get update && apt-get install -y maven && mvn -q -DskipTests package
EXPOSE 8080
CMD ["java","-jar","target/engageai-backend-0.0.1-SNAPSHOT.jar"]
