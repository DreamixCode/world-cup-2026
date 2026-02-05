package eu.dreamix.wcapi.service;

import eu.dreamix.wcapi.entity.FixtureDocument;
import eu.dreamix.wcapi.external.FixtureRetrievalAdapter;
import eu.dreamix.wcapi.external.RetrieveResult;
import eu.dreamix.wcapi.publisher.MatchEventsPublisher;
import eu.dreamix.wcapi.repository.MongoFixtureRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class UpdateFixturesServiceImpl implements UpdateFixturesService {
    private final FixtureRetrievalAdapter fixtureRetrievalAdapter;
    private final MongoFixtureRepository mongoTemplate;
    private final MatchEventsPublisher publisher;

    public void updateFixtures() {
        final RetrieveResult<List<FixtureDocument>> retrieveResult = fixtureRetrievalAdapter.actualizeFixtures();
        mongoTemplate.saveAll(retrieveResult.data());

        log.info("New fixtures saved. Publishing events");
        for (FixtureDocument fixture : retrieveResult.data()) {
            publisher.matchFetched(fixture);
        }
    }
}
