package eu.dreamix.wcapi.job;

import eu.dreamix.wcapi.service.UpdateFixturesService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

// On property?
@Slf4j
@Component
@RequiredArgsConstructor
public class MatchRetrievalJob {
    private final UpdateFixturesService updateFixturesService;

    @Scheduled(cron = "${scheduler.match-retrieval.cron}")
    public void scheduledRetrieval() {
        log.info("match retrieval cron");
        updateFixturesService.updateFixtures();
    }
}
