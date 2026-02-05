package eu.dreamix.wcapi.publisher;

import eu.dreamix.wcapi.entity.FixtureDocument;
import eu.dreamix.wcapi.event.MatchEvent;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class MatchEventsPublisher {
    private final ApplicationEventPublisher publisher;

    public void matchFetched(FixtureDocument fixtureDocument) {
        log.info("{} - publishing fetched event", fixtureDocument.getId());
        publisher.publishEvent(new MatchEvent(MatchEvent.Type.FETCHED, fixtureDocument));
    }

    public void matchUpdated(FixtureDocument fixtureDocument) {
        log.info("{} - publishing update event", fixtureDocument.getId());
        publisher.publishEvent(new MatchEvent(MatchEvent.Type.UPDATED, fixtureDocument));
    }
}
