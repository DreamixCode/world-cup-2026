package eu.dreamix.wcapi.external;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("wc2018")
@Disabled
class FixtureRetrievalAdapterImplTest {

    @Autowired
    private FixtureRetrievalAdapterImpl adapter;

    @Test
    public void shouldParseFixtures() {
        adapter.actualizeFixtures();
    }
}
