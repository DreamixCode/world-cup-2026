package eu.dreamix.wcapi.service;

import eu.dreamix.wcapi.entity.CrewDocument;
import eu.dreamix.wcapi.entity.UserDocument;
import eu.dreamix.wcapi.repository.BetRepository;
import eu.dreamix.wcapi.repository.CrewRepository;
import eu.dreamix.wcapi.repository.UserRepository;
import eu.dreamix.wcapi.vo.UserPointsProjection;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
@Component
@RequiredArgsConstructor
public class WorldCup2026CrewCustomizations implements CommandLineRunner {
    private final CrewRepository crewRepository;
    private final UserRepository userRepository;
    private final BetRepository betRepository;

    private static final List<CrewDocument> CREWS = List.of(
            new CrewDocument("zayu", "Zayu"),
            new CrewDocument("clutch", "Clutch"),
            new CrewDocument("maple", "Maple")
    );

    @Override
    public void run(final String... args) {
        CREWS.stream()
             .filter(crew -> !crewRepository.existsById(crew.getId()))
             .forEach(crew -> {
                 crewRepository.save(crew);
                 log.info("Initialized crew: {}", crew.getName());
             });

        backfillCrewAssignments();
    }

    private void backfillCrewAssignments() {
        final List<UserDocument> unassigned = userRepository.findAll().stream()
                .filter(u -> u.getCrew() == null)
                .collect(Collectors.toCollection(ArrayList::new));

        if (unassigned.isEmpty()) {
            return;
        }

        final Map<String, Integer> pointsById = betRepository.usersTotalPointsFromBets().stream()
                .collect(Collectors.toMap(p -> p.user().id(), UserPointsProjection::totalPoints));

        unassigned.sort(Comparator.comparingInt((UserDocument u) -> pointsById.getOrDefault(u.getId(), 0)).reversed()
                                  .thenComparing(UserDocument::getId));

        final List<List<UserDocument>> groups = List.of(new ArrayList<>(), new ArrayList<>(), new ArrayList<>());

        int left = 0;
        int right = unassigned.size() - 1;
        while (left <= right) {
            for (int g = 0; g < 3 && left <= right; g++) {
                groups.get(g).add(unassigned.get(left++));
            }
            for (int g = 0; g < 3 && left <= right; g++) {
                groups.get(g).add(unassigned.get(right--));
            }
        }

        for (int i = 0; i < CREWS.size(); i++) {
            final String crewId = CREWS.get(i).getId();
            final List<UserDocument> members = groups.get(i);
            members.forEach(u -> u.setCrew(crewId));
            userRepository.saveAll(members);
            log.info("Assigned {} users to crew '{}'", members.size(), crewId);
        }
    }
}
