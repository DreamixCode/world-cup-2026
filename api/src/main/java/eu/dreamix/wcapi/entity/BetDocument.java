package eu.dreamix.wcapi.entity;

import eu.dreamix.wcapi.vo.MatchData;
import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Represents a user's score prediction for a match, stored in the {@code bets} MongoDB collection.
 * <p>
 * Embeds a snapshot of the relevant {@link Match} (id + the actual final score at calculation time)
 * and the {@link User} who placed the bet. The {@code bet} field holds the predicted home/away goals.
 * <p>
 * After the match finishes a background job calculates the earned {@code points} and sets
 * {@code isCalculated = true} to prevent double-processing.
 */
@Data
@Document("bets")
public class BetDocument {
    @Id
    private ObjectId id;

    private Match match;

    private User user;

    private MatchData<Integer> bet;

    private Boolean isCalculated = false;

    private Integer points;

    public record User(String id, String firstName, String lastName, String email, String picture) {}

    public record Match(Integer id, Integer home, Integer away) {}
}
