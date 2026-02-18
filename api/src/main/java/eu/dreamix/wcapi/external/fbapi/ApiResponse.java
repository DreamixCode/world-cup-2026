package eu.dreamix.wcapi.external.fbapi;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import jakarta.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@Data
//{"get":"fixtures","parameters":{"league":"1","season":"2018"},"errors":[],"results":64,"paging":{"current":1,"total":1},"response"
public class ApiResponse<T> {
    private String get;
    private Integer results;
    private T response;
    private Paging paging;

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

    public record Paging(Integer current, Integer total) {}
}
