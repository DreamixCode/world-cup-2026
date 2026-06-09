package eu.dreamix.wcapi.job;

import eu.dreamix.wcapi.service.TopScorerService;
import eu.dreamix.wcapi.service.UpdateFixturesService;
import eu.dreamix.wcapi.service.UpdateGroupStandingsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@Profile("!mock-data")
@ConditionalOnProperty(name = "app.startup-data-refresh.enabled", havingValue = "true", matchIfMissing = true)
@RequiredArgsConstructor
public class StartupDataRefreshRunner implements ApplicationRunner {
    private final UpdateFixturesService updateFixturesService;
    private final UpdateGroupStandingsService updateGroupStandingsService;
    private final TopScorerService topScorerService;

    @Override
    public void run(final ApplicationArguments args) {
        log.info("Startup data refresh: fetching fixtures, standings and top scorers from provider");
        try {
            updateFixturesService.updateFixtures();
            updateGroupStandingsService.updateGroupStandings();
            topScorerService.updateTopScorers();
            log.info("Startup data refresh complete");
        } catch (Exception e) {
            log.error("Startup data refresh failed — app continues with stale/empty data", e);
        }
    }
}
