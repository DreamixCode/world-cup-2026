package eu.dreamix.wcapi.service;

import eu.dreamix.wcapi.dto.ChampionDto;
import eu.dreamix.wcapi.dto.ChampionSelectRequest;
import eu.dreamix.wcapi.entity.ChampionPickDocument;
import eu.dreamix.wcapi.entity.GroupStandingDocument;
import eu.dreamix.wcapi.entity.Team;
import eu.dreamix.wcapi.external.StandingRetrievalAdapter;
import eu.dreamix.wcapi.repository.ChampionPickRepository;
import eu.dreamix.wcapi.repository.GroupStandingRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class ChampionServiceImpl implements ChampionService {
    private final GroupStandingRepository groupStandingRepository;
    private final StandingRetrievalAdapter standingRetrievalAdapter;
    private final ChampionPickRepository championPickRepository;

    @Override
    public List<ChampionDto> getChampions(final String userId) {
        List<GroupStandingDocument> standings = groupStandingRepository.findAll();
        if (standings.isEmpty()) {
            standings = standingRetrievalAdapter.actualizeGroupStandings().data();
        }

        final Integer pickedId = championPickRepository.findById(userId)
                .map(ChampionPickDocument::getChampionId)
                .orElse(null);

        return standings.stream()
                .map(GroupStandingDocument::getTeam)
                .filter(Objects::nonNull)
                .collect(Collectors.toMap(Team::id, t -> t, (a, b) -> a))
                .values().stream()
                .map(team -> new ChampionDto(team.id(), team.name(), team.id().equals(pickedId)))
                .sorted(Comparator.<ChampionDto, Integer>comparing(dto -> dto.selected() ? 0 : 1)
                        .thenComparing(ChampionDto::name))
                .toList();
    }

    @Override
    public void selectChampion(final String userId, final ChampionSelectRequest request) {
        final ChampionPickDocument pick = new ChampionPickDocument(userId, request.id(), request.name());
        championPickRepository.save(pick);
        log.info("User {} selected champion {}", userId, request.id());
    }
}
