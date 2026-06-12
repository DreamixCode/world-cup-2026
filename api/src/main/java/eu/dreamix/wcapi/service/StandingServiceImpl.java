package eu.dreamix.wcapi.service;

import static java.util.stream.Collectors.groupingBy;
import static java.util.stream.Collectors.mapping;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import eu.dreamix.wcapi.dto.GroupStandingDto;
import eu.dreamix.wcapi.entity.GroupStandingDocument;
import eu.dreamix.wcapi.external.StandingRetrievalAdapter;
import eu.dreamix.wcapi.mapper.GroupStandingMapper;
import eu.dreamix.wcapi.repository.BetRepository;
import eu.dreamix.wcapi.repository.GroupStandingRepository;
import eu.dreamix.wcapi.vo.UserPointsProjection;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class StandingServiceImpl implements StandingService {
    private final BetRepository betRepository;
    private final GroupStandingRepository groupStandingRepository;
    private final GroupStandingMapper groupStandingMapper;
    private final StandingRetrievalAdapter standingRetrievalAdapter;
    private final WorldCup2026StandingsCustomizations worldCup2026StandingsCustomizations;

    @Override
    public List<UserPointsProjection> userStandings() {
        return betRepository.usersTotalPointsFromBets();
    }

    @Override
    public List<GroupStandingDto> groupStandings() {
        List<GroupStandingDocument> all = groupStandingRepository.findAll();
        if (all.isEmpty()) {
            all = standingRetrievalAdapter.actualizeGroupStandings().data();
        }
        List<GroupStandingDto> standings = all.stream()
                  .collect(groupingBy(GroupStandingDocument::getGroup,
                                      mapping(groupStandingMapper::documentToTeamDto, Collectors.toList()))
                  )
                  .entrySet()
                  .stream()
                  .map(entry -> new GroupStandingDto(entry.getKey(), entry.getValue()))
                  .sorted(Comparator.comparing(GroupStandingDto::group))
                  .toList();
        
        // TODO: Possibly generalize as TournamentCustomizations to accomodate other tournaments
        return worldCup2026StandingsCustomizations.apply(standings);
    }
}
