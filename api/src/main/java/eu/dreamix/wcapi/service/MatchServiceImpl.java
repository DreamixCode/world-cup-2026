package eu.dreamix.wcapi.service;

import eu.dreamix.wcapi.dto.MatchFilter;
import eu.dreamix.wcapi.entity.FixtureDocument;
import eu.dreamix.wcapi.entity.StatusType;
import eu.dreamix.wcapi.publisher.MatchEventsPublisher;
import eu.dreamix.wcapi.repository.MongoFixtureRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class MatchServiceImpl implements MatchService {
    private final MongoFixtureRepository repository;
    private final MatchEventsPublisher publisher;

    @Override
    public List<FixtureDocument> retrieveMatchesByCriteria(final MatchFilter filter) {
        List<FixtureDocument> fixtures;

        if (filter.date() == null) {
            fixtures = repository.findAll();
        } else {
            fixtures = repository.findBetweenDates(
                    filter.date().atStartOfDay(),
                    filter.date().atTime(LocalTime.MAX)
            );
        }

        return fixtures;
    }

    @Override
    public Optional<FixtureDocument> getById(final Integer matchId) {
        return repository.findById(matchId);
    }

    @Override
    public FixtureDocument update(
            final FixtureDocument fixture,
            final StatusType status,
            final ZonedDateTime date,
            final Integer elapsed) {
        fixture.getFixture().setDate(date.toInstant());
        fixture.getFixture().getStatus().setType(status);
        fixture.getFixture().getStatus().setAsLong(status.getDescription());

        if (status == StatusType.FT) {
            fixture.getFixture().getStatus().setElapsed(elapsed);
        }

        log.info(fixture.toString());

        final FixtureDocument updated = repository.save(fixture);
        publisher.matchUpdated(updated);

        return updated;
    }
}
