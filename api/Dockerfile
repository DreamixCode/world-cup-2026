FROM eclipse-temurin:21-jdk AS build

WORKDIR /build
# Copy Maven wrapper and pom.xml first so dependency resolution is cached
# as a separate layer and only re-runs when pom.xml changes.
COPY .mvn/ .mvn/
COPY mvnw pom.xml ./
RUN chmod +x mvnw && ./mvnw dependency:go-offline -q

COPY src/ src/
RUN ./mvnw package -DskipTests -q

FROM eclipse-temurin:21-jre

WORKDIR /app
COPY --from=build /build/target/wc-api-*.jar ./app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]
