package eu.dreamix.wcapi.service;

import eu.dreamix.wcapi.dto.GroupStandingDto;
import eu.dreamix.wcapi.entity.GroupStandingDocument;
import eu.dreamix.wcapi.mapper.GroupStandingMapper;
import eu.dreamix.wcapi.repository.BetRepository;
import eu.dreamix.wcapi.repository.GroupStandingRepository;
import eu.dreamix.wcapi.vo.UserPointsProjection;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.groupingBy;
import static java.util.stream.Collectors.mapping;

@Slf4j
@Service
@RequiredArgsConstructor
public class StandingServiceImpl implements StandingService {
    private final BetRepository betRepository;
    private final GroupStandingRepository groupStandingRepository;
    private final GroupStandingMapper groupStandingMapper;

    @Override
    public List<UserPointsProjection> userStandings() {
        return betRepository.usersTotalPointsFromBets();
    }

    @Override
    public List<GroupStandingDto> groupStandings() {
        final List<GroupStandingDocument> all = groupStandingRepository.findAll();
        return all.stream()
                  .collect(groupingBy(GroupStandingDocument::getGroup,
                                      mapping(groupStandingMapper::documentToTeamDto, Collectors.toList()))
                  )
                  .entrySet()
                  .stream()
                  .map((entry) -> new GroupStandingDto(entry.getKey(), entry.getValue()))
                  .toList();
    }
}
