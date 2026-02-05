package eu.dreamix.wcapi.entity;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.bson.codecs.pojo.annotations.BsonId;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.Valid;
import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

@Data
@Document("standings")
public class GroupStandingDocument {
    @BsonId
    private ObjectId id;

    private Integer rank;
    private Team team;
    private Integer points;
    private Integer goalsDiff;
    private String group;
    private Instant update;
    private Statistic all;
    private Statistic home;
    private Statistic away;

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

    public record Statistic(Integer played, Integer win, Integer draw, Integer lose, Goals goals) {
        public record Goals(@JsonProperty("for") Integer forScored, @JsonProperty("against") Integer againstScored) {}
    }
}
