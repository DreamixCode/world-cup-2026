package eu.dreamix.wcapi.repository;

import eu.dreamix.wcapi.vo.UserPointsProjection;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(classes = BetRepository.class)
@Disabled
class BetRepositoryTest {

    @Autowired
    BetRepository betRepository;

    @Test
    void usersTotalPointsFromBets() {
        final List<UserPointsProjection> userPointProjections = betRepository.usersTotalPointsFromBets();
        assertEquals(userPointProjections.size(), 1);
    }
}
