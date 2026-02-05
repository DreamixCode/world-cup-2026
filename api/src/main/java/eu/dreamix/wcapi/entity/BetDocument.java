package eu.dreamix.wcapi.entity;

import eu.dreamix.wcapi.vo.MatchData;
import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

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
