package eu.dreamix.wcapi.external.fbapi;

import eu.dreamix.wcapi.config.FootballApiConfig;
import feign.RequestInterceptor;
import feign.RequestTemplate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class ApiKeyInterceptor implements RequestInterceptor {
    private final FootballApiConfig footballApiConfig;

    @Override
    public void apply(final RequestTemplate requestTemplate) {
        requestTemplate.header(footballApiConfig.apiKeyHeader(), footballApiConfig.apiKey());
    }
}
