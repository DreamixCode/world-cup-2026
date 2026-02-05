package eu.dreamix.wcapi.vo;

import eu.dreamix.wcapi.entity.BetDocument;

public record UserPointsProjection(BetDocument.User user, Integer totalPoints) {
}
