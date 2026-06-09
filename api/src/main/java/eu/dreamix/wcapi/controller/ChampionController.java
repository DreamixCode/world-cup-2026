package eu.dreamix.wcapi.controller;

import eu.dreamix.wcapi.dto.ChampionDto;
import eu.dreamix.wcapi.dto.ChampionSelectRequest;
import eu.dreamix.wcapi.service.ChampionService;
import eu.dreamix.wcapi.service.CurrentUserData;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/champion")
public class ChampionController {
    private final ChampionService championService;
    private final CurrentUserData currentUserData;

    @GetMapping
    public List<ChampionDto> getChampions() {
        final String userId = currentUserData.getUserForPersistence().getId();
        return championService.getChampions(userId);
    }

    @PostMapping
    public void selectChampion(@RequestBody final ChampionSelectRequest request) {
        final String userId = currentUserData.getUserForPersistence().getId();
        championService.selectChampion(userId, request);
    }
}
