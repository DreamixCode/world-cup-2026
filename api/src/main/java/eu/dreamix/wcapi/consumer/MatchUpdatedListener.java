package eu.dreamix.wcapi.consumer;

import eu.dreamix.wcapi.entity.FixtureDocument;
import eu.dreamix.wcapi.entity.StatusType;
import eu.dreamix.wcapi.event.MatchEvent;
import eu.dreamix.wcapi.service.BetService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.PayloadApplicationEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class MatchUpdatedListener {

    private final BetService betService;

    @EventListener
    public void handleFinishedMatch(final PayloadApplicationEvent<MatchEvent> event) {
        final FixtureDocument match = event.getPayload().match();

        log.info("{} - received update event", match.getId());

        final StatusType status = match.getFixture()
                                       .getStatus()
                                       .getType();

        if(status.isFinished()) {
            // Is finished with penalties or usual goals?
            betService.calculateBets(match.getId(), match.getScore().fulltime());
        }
    }
}
