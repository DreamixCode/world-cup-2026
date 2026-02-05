package eu.dreamix.wcapi.external;

import eu.dreamix.wcapi.config.FootballApiConfig;
import eu.dreamix.wcapi.entity.GroupStandingDocument;
import eu.dreamix.wcapi.external.fbapi.ApiResponse;
import eu.dreamix.wcapi.external.fbapi.FootballApi;
import eu.dreamix.wcapi.external.fbapi.LeagueStandingDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;

@Slf4j
@Component
@RequiredArgsConstructor
public class StandingRetrievalApiAdapter implements StandingRetrievalAdapter {
    private final FootballApi footballApi;
    private final FootballApiConfig footballApiConfig;

    @Override
    public RetrieveResult<List<GroupStandingDocument>> actualizeGroupStandings() {
        final ApiResponse<List<LeagueStandingDto>> apiResponse =
                footballApi.getStandings(footballApiConfig.leagueId(), footballApiConfig.season());

        if (apiResponse.getResponse() == null || apiResponse.getResponse().isEmpty()) {
            log.info("Retrieve fixtures empty result: {}", apiResponse);
            return new RetrieveResult<>(0, 0, List.of());
        }

        final List<GroupStandingDocument> standings = extractFlatStandings(apiResponse.getResponse(),
                                                                           footballApiConfig.leagueId(),
                                                                           footballApiConfig.season());

        return new RetrieveResult<>(apiResponse.getResults(), apiResponse.getResults(), standings);
    }

    List<GroupStandingDocument> extractFlatStandings(List<LeagueStandingDto> response, Integer leagueId, Integer season) {
        return response.stream()
                       .filter(leagueStandingDto -> leagueStandingDto.getLeague()
                                                                     .getId()
                                                                     .equals(leagueId)
                                                    && leagueStandingDto.getLeague()
                                                                        .getSeason()
                                                                        .equals(season))
                       .findFirst()
                       .map(league -> league.getLeague()
                                            .getStandings()
                                            .stream()
                                            .flatMap(List::stream)
                                            .toList())
                       .orElseThrow(() -> {
                           String message = String.format("Error extracting info for league %s, season %s", leagueId, season);
                           return new RuntimeException(message);
                       });
    }
}
