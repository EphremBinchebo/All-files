FROM eclipse-temurin:17-jdk-jammy
WORKDIR /app
COPY pom.xml mvnw* ./
COPY src ./src
RUN apt-get update && apt-get install -y maven && mvn -q -DskipTests package
EXPOSE 8080
CMD ["java","-jar","target/engageai-backend-1.0.0.jar"]
