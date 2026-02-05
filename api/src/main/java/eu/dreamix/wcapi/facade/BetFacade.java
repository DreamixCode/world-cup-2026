package eu.dreamix.wcapi.facade;

import eu.dreamix.wcapi.dto.BetDto;
import eu.dreamix.wcapi.dto.BetFilter;
import eu.dreamix.wcapi.entity.BetDocument;
import eu.dreamix.wcapi.entity.FixtureDocument;
import eu.dreamix.wcapi.entity.StatusType;
import eu.dreamix.wcapi.mapper.BetMapper;
import eu.dreamix.wcapi.service.BetService;
import eu.dreamix.wcapi.service.CurrentUserData;
import eu.dreamix.wcapi.service.MatchService;
import eu.dreamix.wcapi.vo.UserData;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class BetFacade {
    private final BetService betService;
    private final MatchService matchService;
    private final CurrentUserData currentUserData;
    private final BetMapper betMapper;

    public void postBet(Integer matchId, Integer home, Integer away) {
        // Retrieve user;
        final UserData user = currentUserData.getCurrentUserData();
        // Retrieve match;
        final FixtureDocument match = matchService.getById(matchId)
                                                  .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Match not found!"));

        // Validate match not started
        final boolean hasMatchStarted = match.getFixture()
                                             .getDate()
                                             .isBefore(Instant.now());

        if (hasMatchStarted) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Match already started!");
        }

        final Optional<BetDocument> betForMatchAndUser = betService.findByMatchAndUser(matchId, user.email());

        if (betForMatchAndUser.isPresent()) {
            betService.updateBet(betForMatchAndUser.get(), home, away);
        } else {
            betService.postBet(user, match, home, away);
        }
    }

    public List<BetDto> retrieveCurrentUserBets() {
        final UserData user = currentUserData.getCurrentUserData();

        return retrieveUserBets(user.email());
    }

    public List<BetDto> retrieveUserBets(final String email) {
        return betService.fetchByUser(email)
                         .stream()
                         .map(betMapper::documentToDto)
                         .toList();
    }

    public List<BetDto> retrieveBets(final BetFilter betFilter) {
        return betService.searchByCriteria(betFilter)
                         .stream()
                         .map(betMapper::documentToDto)
                         .toList();
    }

    // TODO: Does I need this?
    List<StatusType> matchNotStartedStatuses() {
        return List.of(StatusType.TBD, StatusType.NS, StatusType.PST);
    }
}
