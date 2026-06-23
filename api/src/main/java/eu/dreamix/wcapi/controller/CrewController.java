package eu.dreamix.wcapi.controller;

import eu.dreamix.wcapi.dto.CrewDto;
import eu.dreamix.wcapi.service.CrewService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/crews")
public class CrewController {
    private final CrewService crewService;

    @GetMapping
    public List<CrewDto> getCrews() {
        return crewService.getCrews();
    }
}
