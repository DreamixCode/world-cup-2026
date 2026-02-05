package eu.dreamix.wcapi.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("football-api")
public record FootballApiConfig (
        String uri,
        String apiKey,
        String apiKeyHeader,
        Integer leagueId,
        Integer season
) {}
