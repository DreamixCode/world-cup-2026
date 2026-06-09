package eu.dreamix.wcapi.external;

import eu.dreamix.wcapi.config.FootballApiConfig;
import eu.dreamix.wcapi.entity.TopScorerDocument;
import eu.dreamix.wcapi.external.fbapi.ApiResponse;
import eu.dreamix.wcapi.external.fbapi.FootballApi;
import eu.dreamix.wcapi.external.fbapi.TopScorerApiDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.util.List;

@Slf4j
@Component
@Profile("!mock-data")
@RequiredArgsConstructor
public class TopScorerRetrievalApiAdapter implements TopScorerRetrievalAdapter {
    private final FootballApi footballApi;
    private final FootballApiConfig footballApiConfig;

    @Override
    public RetrieveResult<List<TopScorerDocument>> actualizeTopScorers() {
        final ApiResponse<List<TopScorerApiDto>> apiResponse =
                footballApi.getTopScorers(footballApiConfig.leagueId(), footballApiConfig.season());

        if (apiResponse.getResponse() == null || apiResponse.getResponse().isEmpty()) {
            log.info("Top scorers empty result: {}", apiResponse);
            return new RetrieveResult<>(0, 0, List.of());
        }

        final List<TopScorerDocument> topScorers = apiResponse.getResponse().stream()
                .map(this::mapToDocument)
                .toList();

        return new RetrieveResult<>(apiResponse.getResults(), topScorers.size(), topScorers);
    }

    private TopScorerDocument mapToDocument(final TopScorerApiDto dto) {
        final TopScorerApiDto.Player player = dto.getPlayer();
        final TopScorerApiDto.Statistics firstStat = dto.getStatistics() != null && !dto.getStatistics().isEmpty()
                ? dto.getStatistics().get(0)
                : null;
        final String teamName = firstStat != null && firstStat.getTeam() != null
                ? firstStat.getTeam().getName()
                : null;
        final Integer goals = firstStat != null && firstStat.getGoals() != null
                ? firstStat.getGoals().getTotal()
                : null;

        return new TopScorerDocument(player.getId(), player.getName(), player.getNationality(), player.getPhoto(), teamName, goals);
    }
}
