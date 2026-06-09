package eu.dreamix.wcapi.external;

import eu.dreamix.wcapi.entity.GroupStandingDocument;
import eu.dreamix.wcapi.external.fbapi.LeagueStandingDto;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class StandingRetrievalApiAdapterTest {

    @Test
    void extractFlatStandings_shouldFlattenWhenLeagueAndSeasonMatch() {
        final GroupStandingDocument first = new GroupStandingDocument();
        final GroupStandingDocument second = new GroupStandingDocument();

        final LeagueStandingDto.League league = new LeagueStandingDto.League();
        league.setId(1);
        league.setSeason(2026);
        league.setStandings(List.of(List.of(first), List.of(second)));

        final LeagueStandingDto dto = new LeagueStandingDto();
        dto.setLeague(league);

        final StandingRetrievalApiAdapter adapter = new StandingRetrievalApiAdapter(null, null);

        final List<GroupStandingDocument> result = adapter.extractFlatStandings(List.of(dto), 1, 2026);

        assertEquals(2, result.size());
        assertEquals(List.of(first, second), result);
    }

    @Test
    void extractFlatStandings_shouldReturnEmptyWhenLeagueSeasonDoNotMatch() {
        final LeagueStandingDto.League league = new LeagueStandingDto.League();
        league.setId(999);
        league.setSeason(2024);
        league.setStandings(List.of());

        final LeagueStandingDto dto = new LeagueStandingDto();
        dto.setLeague(league);

        final StandingRetrievalApiAdapter adapter = new StandingRetrievalApiAdapter(null, null);

        final List<GroupStandingDocument> result = adapter.extractFlatStandings(List.of(dto), 1, 2026);

        assertTrue(result.isEmpty());
    }
}
