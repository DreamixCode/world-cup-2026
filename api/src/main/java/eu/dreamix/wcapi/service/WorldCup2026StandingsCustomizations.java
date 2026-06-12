package eu.dreamix.wcapi.service;

import org.springframework.stereotype.Component;

import eu.dreamix.wcapi.dto.GroupStandingDto;

// TEMPORARY: 2026 WC only.
// api-sports.io returns "Group Stage" as the group name for the third-placed-teams ranking table.
// Rename it to something more user-friendly. Remove this class once the season is over.
// TODO: Possibly generalize as TournamentCustomization interface to accommodate other tournaments
@Component
public class WorldCup2026StandingsCustomizations {

    private static final String GROUP_STAGE_RAW     = "Group Stage";
    private static final String GROUP_STAGE_DISPLAY = "Ranking 3rd place teams";

    public GroupStandingDto applyToGroup(GroupStandingDto dto) {
        if (GROUP_STAGE_RAW.equals(dto.group())) {
            return new GroupStandingDto(GROUP_STAGE_DISPLAY, dto.teams());
        }
        return dto;
    }
}
