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

    @Scheduled(cron = "${scheduler.match-retrieval.active-cron}")
    public void scheduledRetrievalActiveWindow() {
        log.info("match retrieval cron (active window)");
        updateFixturesService.updateFixtures();
    }

    @Scheduled(cron = "${scheduler.match-retrieval.inactive-cron}")
    public void scheduledRetrievalInactiveWindow() {
        log.info("match retrieval cron (inactive window)");
        updateFixturesService.updateFixtures();
    }
}
