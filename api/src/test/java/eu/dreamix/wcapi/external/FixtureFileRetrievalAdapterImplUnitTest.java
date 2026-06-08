package eu.dreamix.wcapi.external;

import com.fasterxml.jackson.databind.ObjectMapper;
import eu.dreamix.wcapi.entity.FixtureDocument;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;

class FixtureFileRetrievalAdapterImplUnitTest {

    @Test
    void shouldDeserializeFixtureFileWithTeamsAndScores() {
        final ObjectMapper objectMapper = new ObjectMapper().findAndRegisterModules();
        final FixtureFileRetrievalAdapterImpl adapter = new FixtureFileRetrievalAdapterImpl(objectMapper);

        final RetrieveResult<List<FixtureDocument>> result = adapter.actualizeFixtures();

        assertFalse(result.data().isEmpty());

        final FixtureDocument first = result.data().get(0);
        assertNotNull(first.getId());
        assertNotNull(first.getFixture());
        assertNotNull(first.getTeams());
        assertNotNull(first.getTeams().getHome());
        assertNotNull(first.getTeams().getAway());
        assertNotNull(first.getScore());
    }
}
