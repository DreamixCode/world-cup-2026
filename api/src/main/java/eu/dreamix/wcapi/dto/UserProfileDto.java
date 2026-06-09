package eu.dreamix.wcapi.dto;

import eu.dreamix.wcapi.vo.Score;
import eu.dreamix.wcapi.vo.UserData;

import java.util.List;

public record UserProfileDto(UserData user, Integer totalPoints, List<UserBetDto> bets) {
    public record UserBetDto(Integer matchId, Score bet, Integer points, MatchDto match) {
    }
}