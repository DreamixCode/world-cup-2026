package eu.dreamix.wcapi.controller;

import eu.dreamix.wcapi.dto.BetDto;
import eu.dreamix.wcapi.dto.BetFilter;
import eu.dreamix.wcapi.facade.BetFacade;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("api/bets")
public class BetController {
    private final BetFacade betFacade;

    @PostMapping()
    public ResponseEntity<?> postBet(@RequestBody @Valid BetPostDto betPost) {
        betFacade.postBet(betPost.matchId, betPost.home, betPost.away);

        return ResponseEntity.noContent()
                             .build();
    }

    @GetMapping("my")
    public List<BetDto> getMyBets() {
        return betFacade.retrieveCurrentUserBets();
    }

    @GetMapping()
    public List<BetDto> getBets(BetFilter betFilter) {
        return betFacade.retrieveBets(betFilter);
    }

    record BetPostDto(@NotNull Integer matchId,
                      @NotNull @Min(0) Integer home,
                      @NotNull @Min(0) Integer away) {
    }
}
