package eu.dreamix.wcapi.service;

import eu.dreamix.wcapi.dto.CrewDto;
import eu.dreamix.wcapi.repository.CrewRepository;
import eu.dreamix.wcapi.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CrewServiceImpl implements CrewService {
    private final CrewRepository crewRepository;
    private final UserRepository userRepository;

    @Override
    public List<CrewDto> getCrews() {
        return crewRepository.findAll().stream()
                             .map(crew -> new CrewDto(crew.getId(), crew.getName()))
                             .toList();
    }

    @Override
    public Optional<String> findSmallestCrewId() {
        return crewRepository.findAll().stream()
                             .min(Comparator.comparingLong(crew -> userRepository.countByCrew(crew.getId())))
                             .map(crew -> crew.getId());
    }
}
