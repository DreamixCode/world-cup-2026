package eu.dreamix.wcapi.external;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles("wc2018")
@Disabled
class FixtureFileRetrievalAdapterImplTest {

    @Autowired
    private FixtureFileRetrievalAdapterImpl adapter;

    @Test
    public void shouldParseFixtures() {
        adapter.actualizeFixtures();
    }
}
