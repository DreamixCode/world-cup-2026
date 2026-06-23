package eu.dreamix.wcapi.service;

import eu.dreamix.wcapi.dto.MatchDto;
import eu.dreamix.wcapi.dto.UserProfileDto;
import eu.dreamix.wcapi.entity.BetDocument;
import eu.dreamix.wcapi.entity.FixtureDocument;
import eu.dreamix.wcapi.entity.UserDocument;
import eu.dreamix.wcapi.mapper.MatchMapper;
import eu.dreamix.wcapi.mapper.UserMapper;
import eu.dreamix.wcapi.repository.CrewRepository;
import eu.dreamix.wcapi.repository.UserRepository;
import eu.dreamix.wcapi.vo.Score;
import eu.dreamix.wcapi.vo.UserData;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.web.server.ResponseStatusException;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserServiceImplTest {
    @Mock
    private UserRepository userRepository;
    @Mock
    private CrewRepository crewRepository;
    @Mock
    private BetService betService;
    @Mock
    private MatchService matchService;
    @Mock
    private MatchMapper matchMapper;
    @Mock
    private UserMapper userMapper;

    @InjectMocks
    private UserServiceImpl service;

    @Test
    void getProfileShouldAggregateUserPointsAndSortBetsByMatchDate() {
        final String userId = "u-1";
        final UserDocument userDocument = new UserDocument(userId, "Ana", "Ivanova", "ana@dreamix.eu", "http://img", null);
        final UserData userData = new UserData(userId, "Ana", "Ivanova", "ana@dreamix.eu", "http://img", null);

        final BetDocument laterBet = new BetDocument();
        laterBet.setMatch(new BetDocument.Match(200, null, null));
        laterBet.setBet(new Score(1, 0));
        laterBet.setPoints(1);

        final BetDocument earlierBet = new BetDocument();
        earlierBet.setMatch(new BetDocument.Match(100, null, null));
        earlierBet.setBet(new Score(2, 1));
        earlierBet.setPoints(3);

        final FixtureDocument fixture100 = new FixtureDocument();
        final FixtureDocument fixture200 = new FixtureDocument();

        final MatchDto match100 = new MatchDto();
        match100.setId(100);
        match100.setDate(ZonedDateTime.parse("2026-06-12T19:00:00Z"));

        final MatchDto match200 = new MatchDto();
        match200.setId(200);
        match200.setDate(ZonedDateTime.parse("2026-06-13T19:00:00Z"));

        when(userRepository.findById(userId)).thenReturn(Optional.of(userDocument));
        when(userMapper.fromEntity(userDocument)).thenReturn(userData);
        when(betService.searchByCriteria(any())).thenReturn(List.of(laterBet, earlierBet));
        when(matchService.getById(100)).thenReturn(Optional.of(fixture100));
        when(matchService.getById(200)).thenReturn(Optional.of(fixture200));
        when(matchMapper.fixtureToMatch(fixture100)).thenReturn(match100);
        when(matchMapper.fixtureToMatch(fixture200)).thenReturn(match200);

        final UserProfileDto result = service.getProfile(userId);

        assertEquals(userId, result.user().id());
        assertEquals(4, result.totalPoints());
        assertEquals(2, result.bets().size());
        assertEquals(Set.of(100, 200), result.bets().stream().map(UserProfileDto.UserBetDto::matchId).collect(java.util.stream.Collectors.toSet()));
    }

    @Test
    void getProfileShouldReturnNullMatchWhenFixtureIsMissing() {
        final String userId = "u-2";
        final UserDocument userDocument = new UserDocument(userId, "Bob", "Petrov", "bob@dreamix.eu", "http://img", null);
        final UserData userData = new UserData(userId, "Bob", "Petrov", "bob@dreamix.eu", "http://img", null);

        final BetDocument bet = new BetDocument();
        bet.setMatch(new BetDocument.Match(300, null, null));
        bet.setBet(new Score(0, 0));
        bet.setPoints(null);

        when(userRepository.findById(userId)).thenReturn(Optional.of(userDocument));
        when(userMapper.fromEntity(userDocument)).thenReturn(userData);
        when(betService.searchByCriteria(any())).thenReturn(List.of(bet));
        when(matchService.getById(300)).thenReturn(Optional.empty());

        final UserProfileDto result = service.getProfile(userId);

        assertEquals(0, result.totalPoints());
        assertEquals(1, result.bets().size());
        assertNull(result.bets().getFirst().match());
    }

    @Test
    void getProfileShouldThrowNotFoundWhenUserDoesNotExist() {
        when(userRepository.findById("missing")).thenReturn(Optional.empty());

        assertThrows(ResponseStatusException.class, () -> service.getProfile("missing"));
    }

    @Test
    void assignCrewShouldPersistCrewIdAndReturnUpdatedUser() {
        final UserDocument user = new UserDocument("u-1", "Ana", "Ivanova", "ana@dreamix.eu", "http://img", null);
        when(crewRepository.existsById("zayu")).thenReturn(true);
        when(userRepository.findById("u-1")).thenReturn(Optional.of(user));

        final UserDocument result = service.assignCrew("u-1", "zayu");

        final ArgumentCaptor<UserDocument> captor = ArgumentCaptor.forClass(UserDocument.class);
        verify(userRepository).save(captor.capture());
        assertEquals("zayu", captor.getValue().getCrew());
        assertEquals("zayu", result.getCrew());
    }

    @Test
    void assignCrewShouldThrowBadRequestWhenCrewNotFound() {
        when(crewRepository.existsById("unknown")).thenReturn(false);

        final ResponseStatusException ex = assertThrows(
                ResponseStatusException.class,
                () -> service.assignCrew("u-1", "unknown")
        );
        assertEquals(400, ex.getStatusCode().value());
    }

    @Test
    void assignCrewShouldThrowNotFoundWhenUserDoesNotExist() {
        when(crewRepository.existsById("zayu")).thenReturn(true);
        when(userRepository.findById("missing")).thenReturn(Optional.empty());

        final ResponseStatusException ex = assertThrows(
                ResponseStatusException.class,
                () -> service.assignCrew("missing", "zayu")
        );
        assertEquals(404, ex.getStatusCode().value());
    }

    @Test
    void unassignCrewShouldSetCrewToNull() {
        final UserDocument user = new UserDocument("u-1", "Ana", "Ivanova", "ana@dreamix.eu", "http://img", "zayu");
        when(userRepository.findById("u-1")).thenReturn(Optional.of(user));

        service.unassignCrew("u-1");

        final ArgumentCaptor<UserDocument> captor = ArgumentCaptor.forClass(UserDocument.class);
        verify(userRepository).save(captor.capture());
        assertNull(captor.getValue().getCrew());
    }

    @Test
    void unassignCrewShouldThrowNotFoundWhenUserDoesNotExist() {
        when(userRepository.findById("missing")).thenReturn(Optional.empty());

        final ResponseStatusException ex = assertThrows(
                ResponseStatusException.class,
                () -> service.unassignCrew("missing")
        );
        assertEquals(404, ex.getStatusCode().value());
    }

}