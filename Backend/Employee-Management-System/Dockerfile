# 1. Base image (Java runtime)
FROM eclipse-temurin:21-jdk-jammy

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy JAR file from your system to container
COPY target/*.jar app.jar

# 4. Expose the port your Spring Boot app runs on
EXPOSE 8085

# 5. Command to run your application
ENTRYPOINT ["java","-jar","app.jar"]