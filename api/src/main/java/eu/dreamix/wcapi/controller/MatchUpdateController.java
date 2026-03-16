package eu.dreamix.wcapi.controller;

import eu.dreamix.wcapi.dto.MatchDto;
import eu.dreamix.wcapi.entity.FixtureDocument;
import eu.dreamix.wcapi.entity.StatusType;
import eu.dreamix.wcapi.mapper.MatchMapper;
import eu.dreamix.wcapi.service.MatchService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import java.time.ZonedDateTime;

@Slf4j
@RestController
@RequestMapping("api/matches")
@RequiredArgsConstructor
@Profile("!prod")
public class MatchUpdateController {
    private final MatchService service;
    private final MatchMapper mapper;


    @PutMapping("{id}")
    public MatchDto updateMatchStatusAndDate(@PathVariable Integer id, @Valid @RequestBody MatchStatusUpdate update) {
        final FixtureDocument fixture = service.getById(id)
                                               .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        final FixtureDocument result = service.update(fixture, update.status, update.date, update.elapsed);

        return mapper.fixtureToMatch(result);
    }

    record MatchStatusUpdate(@NotNull StatusType status, @NotNull ZonedDateTime date, @Positive Integer elapsed) {}
}
