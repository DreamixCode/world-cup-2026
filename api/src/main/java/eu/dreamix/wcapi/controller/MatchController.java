package eu.dreamix.wcapi.controller;

import eu.dreamix.wcapi.dto.MatchDto;
import eu.dreamix.wcapi.dto.MatchFilter;
import eu.dreamix.wcapi.mapper.MatchMapper;
import eu.dreamix.wcapi.service.MatchService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("api/matches")
@RequiredArgsConstructor
public class MatchController {
    private final MatchService service;
    private final MatchMapper mapper;

    @GetMapping("")
    public List<MatchDto> retrieveMatches(MatchFilter filter) {
        return service.retrieveMatchesByCriteria(filter)
                      .stream()
                      .map(mapper::fixtureToMatch).toList();
    }


    @GetMapping("{id}")
    public MatchDto getMatchById(@PathVariable Integer id) {
        return service.getById(id)
                      .map(mapper::fixtureToMatch)
                      .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
}
