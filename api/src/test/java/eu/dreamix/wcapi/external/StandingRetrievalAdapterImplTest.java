package eu.dreamix.wcapi.external;

import eu.dreamix.wcapi.entity.GroupStandingDocument;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Disabled
class StandingRetrievalAdapterImplTest {
    @Autowired
    private StandingRetrievalApiAdapter adapter;

    @Test
    void shouldRetrieveStandings() {
        final RetrieveResult<List<GroupStandingDocument>> listRetrieveResult = adapter.actualizeGroupStandings();
        assertEquals(listRetrieveResult.data().size(), 32);
    }
}
