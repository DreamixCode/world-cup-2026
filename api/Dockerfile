FROM eclipse-temurin:17-jdk as build

WORKDIR /build
COPY . .
RUN ./mvnw package -DskipTests
COPY ./target/wc-api-*.jar ./app.jar

FROM eclipse-temurin:17-jre

WORKDIR /app
COPY --from=build /build/app.jar ./app.jar

CMD ["java", "-jar", "app.jar"]


