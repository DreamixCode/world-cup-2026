package eu.dreamix.wcapi.service;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles("wc2022")
@Disabled
class UpdateFixturesServiceImplTest {
    @Autowired
    private UpdateFixturesServiceImpl service;

    @Test
    public void updateFixtures() {
        service.updateFixtures();
    }

}
