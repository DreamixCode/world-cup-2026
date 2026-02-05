package eu.dreamix.wcapi.external.fbapi;

import eu.dreamix.wcapi.entity.FixtureDocument;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@FeignClient(name = "football-api", url = "${football-api.url}")
public interface FootballApi {

    @RequestMapping(method = RequestMethod.GET, value = "/fixtures")
    ApiResponse<List<FixtureDocument>> getFixtures(@RequestParam Integer league, @RequestParam Integer season);

    @GetMapping("/standings")
    ApiResponse<List<LeagueStandingDto>> getStandings(@RequestParam Integer league, @RequestParam Integer season);
}
