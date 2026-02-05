package eu.dreamix.wcapi.event;

import eu.dreamix.wcapi.entity.FixtureDocument;

public record MatchEvent(Type type, FixtureDocument match) {
    public enum Type {
        FETCHED,
        UPDATED
    }
}
