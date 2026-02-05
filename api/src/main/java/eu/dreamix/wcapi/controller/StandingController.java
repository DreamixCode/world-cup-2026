package eu.dreamix.wcapi.controller;

import eu.dreamix.wcapi.dto.GroupStandingDto;
import eu.dreamix.wcapi.service.StandingService;
import eu.dreamix.wcapi.vo.UserPointsProjection;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("api/standings")
@RequiredArgsConstructor
public class StandingController {
    private final StandingService service;

    @GetMapping("users")
    public List<UserPointsProjection> getUsersStanding() {
        return service.userStandings();
    }

    @GetMapping("groups")
    public List<GroupStandingDto> getGroupStandings() {
        return service.groupStandings();
    }
}
