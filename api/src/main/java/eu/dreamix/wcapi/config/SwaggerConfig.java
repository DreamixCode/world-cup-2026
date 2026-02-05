package eu.dreamix.wcapi.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.OAuthFlow;
import io.swagger.v3.oas.models.security.OAuthFlows;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Map;

@Configuration
public class SwaggerConfig {
    private static final String TITLE = "WorldCup Dreamix API";
    private static final String DESCRIPTION = "API for the best competition!";

    @Bean
    public OpenAPI api() {
        return new OpenAPI()
                       .info(getApiInfo())
                       .components(getComponents())
                       .addSecurityItem(new SecurityRequirement().addList("access_token"));
    }

    private Info getApiInfo() {
        return new Info().title(TITLE)
                         .description(DESCRIPTION);
    }

    private Components getComponents() {
        SecurityScheme authorizationHeaderSchema = new SecurityScheme()
                                                           .name("Authorization")
                                                           .type(SecurityScheme.Type.APIKEY)
                                                           .in(SecurityScheme.In.HEADER);
        return new Components()
                       .securitySchemes(Map.of("access_token", authorizationHeaderSchema));
    }
}

