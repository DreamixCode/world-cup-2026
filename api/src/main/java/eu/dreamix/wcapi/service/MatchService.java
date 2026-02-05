package eu.dreamix.wcapi.service;

import eu.dreamix.wcapi.dto.MatchFilter;
import eu.dreamix.wcapi.entity.FixtureDocument;
import eu.dreamix.wcapi.entity.StatusType;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;

public interface MatchService {
    List<FixtureDocument> retrieveMatchesByCriteria(MatchFilter filter);

    Optional<FixtureDocument> getById(Integer matchId);

    FixtureDocument update(FixtureDocument fixture, StatusType status, ZonedDateTime date, Integer elapsed);
}
