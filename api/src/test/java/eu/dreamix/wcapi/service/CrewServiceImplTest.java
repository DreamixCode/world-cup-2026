package eu.dreamix.wcapi.service;

import eu.dreamix.wcapi.dto.CrewDto;
import eu.dreamix.wcapi.entity.CrewDocument;
import eu.dreamix.wcapi.repository.CrewRepository;
import eu.dreamix.wcapi.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class CrewServiceImplTest {
    @Mock
    private CrewRepository crewRepository;
    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private CrewServiceImpl service;

    @Test
    void getCrewsShouldReturnAllCrews() {
        when(crewRepository.findAll()).thenReturn(List.of(
                new CrewDocument("zayu", "Zayu"),
                new CrewDocument("clutch", "Clutch"),
                new CrewDocument("maple", "Maple")
        ));

        final List<CrewDto> result = service.getCrews();

        assertEquals(3, result.size());
        assertEquals("zayu", result.get(0).id());
        assertEquals("Zayu", result.get(0).name());
    }

    @Test
    void findSmallestCrewIdShouldReturnCrewWithFewestMembers() {
        when(crewRepository.findAll()).thenReturn(List.of(
                new CrewDocument("zayu", "Zayu"),
                new CrewDocument("clutch", "Clutch"),
                new CrewDocument("maple", "Maple")
        ));
        when(userRepository.countByCrew("zayu")).thenReturn(5L);
        when(userRepository.countByCrew("clutch")).thenReturn(3L);
        when(userRepository.countByCrew("maple")).thenReturn(4L);

        final Optional<String> result = service.findSmallestCrewId();

        assertEquals(Optional.of("clutch"), result);
    }

    @Test
    void findSmallestCrewIdShouldReturnEmptyWhenNoCrewsExist() {
        when(crewRepository.findAll()).thenReturn(List.of());

        assertTrue(service.findSmallestCrewId().isEmpty());
    }
}
