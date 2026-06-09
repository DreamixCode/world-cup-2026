package eu.dreamix.wcapi.service;

import eu.dreamix.wcapi.dto.MatchFilter;
import eu.dreamix.wcapi.entity.FixtureDocument;
import eu.dreamix.wcapi.entity.StatusType;
import eu.dreamix.wcapi.external.FixtureRetrievalAdapter;
import eu.dreamix.wcapi.publisher.MatchEventsPublisher;
import eu.dreamix.wcapi.repository.MongoFixtureRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalTime;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class MatchServiceImpl implements MatchService {
    private final MongoFixtureRepository repository;
    private final MatchEventsPublisher publisher;
    private final FixtureRetrievalAdapter fixtureRetrievalAdapter;

    @Override
    public List<FixtureDocument> retrieveMatchesByCriteria(final MatchFilter filter) {
        if (repository.count() == 0) {
            final List<FixtureDocument> all = fixtureRetrievalAdapter.actualizeFixtures().data();
            if (filter.date() == null) {
                return all;
            }
            final Instant from = filter.date().atStartOfDay(ZoneOffset.UTC).toInstant();
            final Instant to = filter.date().atTime(LocalTime.MAX).atZone(ZoneOffset.UTC).toInstant();
            return all.stream()
                    .filter(f -> f.getFixture() != null && f.getFixture().getDate() != null
                            && !f.getFixture().getDate().isBefore(from)
                            && f.getFixture().getDate().isBefore(to))
                    .toList();
        }

        if (filter.date() == null) {
            return repository.findAll();
        }
        return repository.findBetweenDates(
                filter.date().atStartOfDay(),
                filter.date().atTime(LocalTime.MAX)
        );
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
