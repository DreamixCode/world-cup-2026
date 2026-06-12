package eu.dreamix.wcapi.service;

import eu.dreamix.wcapi.dto.GroupStandingDto;
import org.springframework.stereotype.Component;

import java.util.List;

// TEMPORARY: 2026 WC only.
// api-sports.io returns "Group Stage" as the group name for the third-placed-teams ranking table.
// Rename it to something more user-friendly. Remove this class once the season is over.
@Component
public class WorldCup2026StandingsCustomizations {

    private static final String GROUP_STAGE_RAW     = "Group Stage";
    private static final String GROUP_STAGE_DISPLAY = "Ranking 3rd place teams";

    public List<GroupStandingDto> apply(List<GroupStandingDto> standings) {
        return standings.stream()
                        .map(dto -> GROUP_STAGE_RAW.equals(dto.group())
                                    ? new GroupStandingDto(GROUP_STAGE_DISPLAY, dto.teams())
                                    : dto)
                        .toList();
    }
}
