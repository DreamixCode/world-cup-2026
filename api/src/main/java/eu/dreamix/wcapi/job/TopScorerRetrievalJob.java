package eu.dreamix.wcapi.job;

import eu.dreamix.wcapi.service.TopScorerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class TopScorerRetrievalJob {
    private final TopScorerService topScorerService;

    @Scheduled(cron = "${scheduler.top-scorer-retrieval.cron}")
    public void scheduledRetrieval() {
        log.info("top scorer retrieval cron");
        topScorerService.updateTopScorers();
    }
}
