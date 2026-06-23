package eu.dreamix.wcapi.service;

import eu.dreamix.wcapi.dto.CrewDto;

import java.util.List;
import java.util.Optional;

public interface CrewService {
    List<CrewDto> getCrews();
    Optional<String> findSmallestCrewId();
}
