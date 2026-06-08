package eu.dreamix.wcapi.job;

import eu.dreamix.wcapi.service.UpdateGroupStandingsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

// On property?
@Slf4j
@Component
@RequiredArgsConstructor
public class StandingRetrievalJob {
    private final UpdateGroupStandingsService updateGroupStandingsService;

    @Scheduled(cron = "${scheduler.standing-retrieval.active-cron}")
    public void scheduledRetrievalActiveWindow() {
        log.info("standing retrieval cron (active window)");
        updateGroupStandingsService.updateGroupStandings();
    }
}
