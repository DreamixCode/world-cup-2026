package eu.dreamix.wcapi.dto;

import eu.dreamix.wcapi.vo.Score;
import eu.dreamix.wcapi.vo.UserData;

public record BetDto(Integer matchId, UserData user, Score bet, Integer points) {
}
