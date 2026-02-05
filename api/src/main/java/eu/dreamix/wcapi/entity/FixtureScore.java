package eu.dreamix.wcapi.entity;

import eu.dreamix.wcapi.vo.Score;

public record FixtureScore(Score halftime, Score fulltime, Score extratime, Score penalty) {
}
