package eu.dreamix.wcapi.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

import javax.validation.constraints.NotEmpty;
import java.util.List;

@ConfigurationProperties("app")
public record AppConfig(Security security) {
    public record Security(@NotEmpty List<String> allowedOrigins) {
    }
}
