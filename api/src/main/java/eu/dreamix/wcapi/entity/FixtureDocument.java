package eu.dreamix.wcapi.entity;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import eu.dreamix.wcapi.vo.MatchData;
import eu.dreamix.wcapi.vo.Score;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.Valid;
import java.util.HashMap;
import java.util.Map;

/**
 * Represents a football match (fixture) stored in the {@code fixtures} MongoDB collection.
 * <p>
 * Each document maps to a single match provided by the Football API. The {@code id} is the
 * match ID assigned by the external API. Contains structural sub-objects for fixture metadata
 * ({@link Fixture}), score details ({@link FixtureScore}), participating teams, goal totals,
 * and league info.
 * <p>
 * Unknown fields from the API response are captured in {@code additionalProperties} to preserve
 * forward-compatibility without breaking deserialization.
 */
@Data
@Document("fixtures")
public class FixtureDocument {
    @Id
    private Integer id;
    private Fixture fixture;
    private FixtureScore score;
    private MatchData<TeamWinner> teams;
    private Score goals;
    private League league;

    @JsonIgnore
    @Valid
    private Map<String, Object> additionalProperties = new HashMap<>();

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

    public record TeamWinner(Integer id, String name, String logo, Boolean winner) {}
}
