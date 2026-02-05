package eu.dreamix.wcapi.config;

import eu.dreamix.wcapi.filter.AuthenticationSuccessFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.oauth2.server.resource.web.BearerTokenAuthenticationFilter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;

import java.util.List;

@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig {
    private final AppConfig appConfig;
    private final AuthenticationSuccessFilter authenticationSuccessFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.authorizeHttpRequests(
                            (authorize) -> authorize.antMatchers("/api/**")
                                                    .authenticated()
                                                    .anyRequest()
                                                    .permitAll()
                    )
                    .oauth2ResourceServer()
                    .jwt();

        httpSecurity.addFilterAfter(authenticationSuccessFilter, BearerTokenAuthenticationFilter.class);

        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.setAllowedHeaders(List.of("Authorization", "Cache-Control", "Content-Type"));
        corsConfiguration.setAllowedOrigins(appConfig.security().allowedOrigins());
        corsConfiguration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "PUT", "OPTIONS", "PATCH"));
        corsConfiguration.setAllowCredentials(true);
        corsConfiguration.setExposedHeaders(List.of("Authorization"));

        httpSecurity.csrf()
                    .disable()
                    .cors()
                    .configurationSource(request -> corsConfiguration);

        return httpSecurity.build();
    }
}
