package eu.dreamix.wcapi.external;

import eu.dreamix.wcapi.config.FootballApiConfig;
import eu.dreamix.wcapi.entity.FixtureDocument;
import eu.dreamix.wcapi.external.fbapi.ApiResponse;
import eu.dreamix.wcapi.external.fbapi.FootballApi;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;

@Slf4j
@Component
@RequiredArgsConstructor
public class FixtureRetrievalApiAdapter implements FixtureRetrievalAdapter {
    private final FootballApi footballApi;
    private final FootballApiConfig footballApiConfig;

    @Override
    public RetrieveResult<List<FixtureDocument>> actualizeFixtures() {
        log.info("Retrieve fixtures league: {} season: {}", footballApiConfig.leagueId(), footballApiConfig.season());
        final ApiResponse<List<FixtureDocument>> apiResponse = footballApi.getFixtures(footballApiConfig.leagueId(),
                                                                                       footballApiConfig.season());

        if (apiResponse.getResponse() == null) {
            log.info("Retrieve fixtures empty result: {}", apiResponse);
            return new RetrieveResult<>(0, 0, List.of());
        }

        apiResponse.getResponse().forEach(fixture -> fixture.setId(fixture.getFixture().getId()));

        return new RetrieveResult<>(apiResponse.getResults(), apiResponse.getResults(), apiResponse.getResponse());
    }
}
