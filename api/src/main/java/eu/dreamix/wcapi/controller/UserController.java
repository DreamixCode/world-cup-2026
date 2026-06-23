package eu.dreamix.wcapi.controller;

import eu.dreamix.wcapi.dto.CrewAssignRequest;
import eu.dreamix.wcapi.dto.UserProfileDto;
import eu.dreamix.wcapi.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/users")
public class UserController {
    private final UserService userService;

    @GetMapping("{id}")
    public UserProfileDto getById(@PathVariable final String id) {
        return userService.getProfile(id);
    }

    @PutMapping("{id}/crew")
    public void updateCrew(@PathVariable final String id, @RequestBody final CrewAssignRequest request) {
        if (request.crewId() == null) {
            userService.unassignCrew(id);
        } else {
            userService.assignCrew(id, request.crewId());
        }
    }
}
