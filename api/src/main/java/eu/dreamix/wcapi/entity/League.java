package eu.dreamix.wcapi.entity;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import jakarta.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@Data
public class League {
    private Integer id;
    private String name;
    private String country;
    private String logo;
    private String round;
    private Integer season;

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

}
