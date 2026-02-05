package eu.dreamix.wcapi.external.fbapi;

import eu.dreamix.wcapi.entity.FixtureDocument;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("local")
@Disabled
class FootballApiTest {
    @Autowired
    FootballApi footballApi;

    @Test
    void retrieveFixtures() {
        final ApiResponse<List<FixtureDocument>> fixtures = footballApi.getFixtures(4, 2020);
        assertEquals(fixtures, List.of());
    }

    @Test
    void retrieveStandings() {
        final ApiResponse<List<LeagueStandingDto>> standings = footballApi.getStandings(4, 2020);
        assertEquals(standings.getResponse(), List.of());
    }
}
