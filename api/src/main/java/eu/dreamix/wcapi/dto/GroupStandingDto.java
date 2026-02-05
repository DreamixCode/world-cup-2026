package eu.dreamix.wcapi.dto;

import java.util.List;

public record GroupStandingDto(String group, List<Team> teams) {
    public record Team(Integer id,
                       String name,
                       Integer rank,
                       Integer played,
                       Integer win,
                       Integer draw,
                       Integer lose,
                       Integer points,
                       Integer goalsDiff) {
    }
}
