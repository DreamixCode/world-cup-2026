package eu.dreamix.wcapi.service;

import eu.dreamix.wcapi.dto.BetFilter;
import eu.dreamix.wcapi.dto.MatchDto;
import eu.dreamix.wcapi.dto.UserProfileDto;
import eu.dreamix.wcapi.entity.BetDocument;
import eu.dreamix.wcapi.entity.UserDocument;
import eu.dreamix.wcapi.mapper.MatchMapper;
import eu.dreamix.wcapi.mapper.UserMapper;
import eu.dreamix.wcapi.repository.CrewRepository;
import eu.dreamix.wcapi.repository.UserRepository;
import eu.dreamix.wcapi.vo.Score;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Comparator;
import java.util.List;
import java.util.Objects;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final CrewRepository crewRepository;
    private final BetService betService;
    private final MatchService matchService;
    private final MatchMapper matchMapper;
    private final UserMapper userMapper;

    @Override
    public UserProfileDto getProfile(final String userId) {
        final UserDocument userDocument = userRepository.findById(userId)
                                                        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));

        final List<BetDocument> userBets = betService.searchByCriteria(new BetFilter(userId, null));

        final Integer totalPoints = userBets.stream()
                                            .map(BetDocument::getPoints)
                                            .filter(Objects::nonNull)
                                            .mapToInt(Integer::intValue)
                                            .sum();

        final List<UserProfileDto.UserBetDto> bets = userBets.stream()
                                                              .map(this::toUserBetDto)
                                                              .sorted(Comparator.comparing((UserProfileDto.UserBetDto userBetDto) -> userBetDto.match() != null
                                                                                                                           ? userBetDto.match().getDate()
                                                                                                                           : null,
                                                                                           Comparator.nullsLast(Comparator.naturalOrder())))
                                                              .toList();

        return new UserProfileDto(userMapper.fromEntity(userDocument), totalPoints, bets);
    }

    @Override
    public UserDocument assignCrew(final String userId, final String crewId) {
        if (!crewRepository.existsById(crewId)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Crew not found: " + crewId);
        }
        final UserDocument user = findUserOrThrow(userId);
        user.setCrew(crewId);
        userRepository.save(user);
        log.info("User {} assigned to crew {}", userId, crewId);
        return user;
    }

    @Override
    public void unassignCrew(final String userId) {
        final UserDocument user = findUserOrThrow(userId);
        user.setCrew(null);
        userRepository.save(user);
        log.info("User {} unassigned from crew", userId);
    }

    private UserDocument findUserOrThrow(final String userId) {
        return userRepository.findById(userId)
                             .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
    }

    private UserProfileDto.UserBetDto toUserBetDto(final BetDocument betDocument) {
        final Integer matchId = betDocument.getMatch().id();
        final MatchDto matchDto = matchService.getById(matchId)
                                              .map(matchMapper::fixtureToMatch)
                                              .orElse(null);

        return new UserProfileDto.UserBetDto(matchId, mapScore(betDocument), betDocument.getPoints(), matchDto);
    }

    private Score mapScore(final BetDocument betDocument) {
        if (betDocument.getBet() == null) {
            return null;
        }

        return new Score(betDocument.getBet().getHome(), betDocument.getBet().getAway());
    }
}