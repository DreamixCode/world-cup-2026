package eu.dreamix.wcapi.service;

import eu.dreamix.wcapi.dto.GroupStandingDto;
import eu.dreamix.wcapi.vo.UserPointsProjection;

import java.util.List;

public interface StandingService {
    List<UserPointsProjection> userStandings();

    List<GroupStandingDto> groupStandings();
}
