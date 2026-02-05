package eu.dreamix.wcapi.entity;

import com.fasterxml.jackson.annotation.*;
import eu.dreamix.wcapi.vo.StatusLong;
import lombok.Data;
import lombok.Value;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.validation.Valid;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.ZonedDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.TimeZone;

@Data
public class Fixture {
    private Integer id;
    private String referee;
    private Status status;
    private Instant date; // TODO: Check if time is correct date when retrieved from db

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

    @Data
    public static class Status {
        @JsonProperty("long")
        @Field("long")
        private String asLong;
        @JsonProperty("short")
        @Field("short")
        private StatusType type;
        private Integer elapsed;
    }

    @Data
    public static class Venue {
        private Integer id;
        private String name;
        private String city;
    }
}
