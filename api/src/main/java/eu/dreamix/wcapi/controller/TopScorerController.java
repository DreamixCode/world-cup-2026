package eu.dreamix.wcapi.controller;

import eu.dreamix.wcapi.dto.TopScorerDto;
import eu.dreamix.wcapi.dto.TopScorerSelectRequest;
import eu.dreamix.wcapi.service.CurrentUserData;
import eu.dreamix.wcapi.service.TopScorerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/topscorer")
public class TopScorerController {
    private final TopScorerService topScorerService;
    private final CurrentUserData currentUserData;

    @GetMapping
    public List<TopScorerDto> getTopScorers() {
        final String userId = currentUserData.getUserForPersistence().getId();
        return topScorerService.getTopScorers(userId);
    }

    @PostMapping
    public void selectTopScorer(@RequestBody final TopScorerSelectRequest request) {
        final String userId = currentUserData.getUserForPersistence().getId();
        topScorerService.selectTopScorer(userId, request);
    }


}
