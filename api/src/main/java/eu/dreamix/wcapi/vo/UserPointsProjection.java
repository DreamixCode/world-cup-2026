package eu.dreamix.wcapi.vo;

import eu.dreamix.wcapi.entity.UserDocument;

public record UserPointsProjection(UserDocument user, Integer totalPoints) {
}
