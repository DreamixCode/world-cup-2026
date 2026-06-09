package eu.dreamix.wcapi.external;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import eu.dreamix.wcapi.entity.GroupStandingDocument;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Profile;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.StreamSupport;

/**
 * File-based implementation of {@link StandingRetrievalAdapter} intended for local development
 * and testing <strong>without</strong> a live Football API key.
 * <p>
 * Reads standings from {@code classpath:season2022/standings.json}. The JSON is structured as an
 * array of league objects whose {@code league.standings} field is an array of groups, each group
 * being an array of team standing rows. This class flattens that nested structure into a single
 * list of {@link eu.dreamix.wcapi.entity.GroupStandingDocument} objects.
 * <p>
 * Active only when the {@code mock-data} Spring profile is enabled.
 * When the profile is not active, {@link StandingRetrievalApiAdapter} is used instead.
 */
@Slf4j
@Component
@Profile("mock-data")
@RequiredArgsConstructor
public class StandingFileRetrievalAdapterImpl implements StandingRetrievalAdapter {
    private final ObjectMapper mapper;

    @Override
    public RetrieveResult<List<GroupStandingDocument>> actualizeGroupStandings() {
        try {
            final InputStream standingResultStream = new ClassPathResource("season2026/standings.json")
                                                             .getInputStream();

            final JsonNode jsonNode = mapper.readTree(standingResultStream);

            if (jsonNode.isArray()) {
                final JsonNode firstElement = jsonNode.get(0);
                final JsonNode standings = firstElement.get("league").get("standings");

                if (standings.isArray()) {
                    // Array of groups
                    List<JsonNode> tempResult = new ArrayList<>();

                    for (int i = 0; i < standings.size(); i++) {
                        final Iterable<JsonNode> elements = standings.get(i)::elements;
                        final List<JsonNode> jsonNodes = StreamSupport.stream(elements.spliterator(), false).toList();
                        tempResult.addAll(jsonNodes);
                    }

                    final List<GroupStandingDocument> result = mapper.convertValue(
                            tempResult, mapper.getTypeFactory().constructCollectionType(List.class, GroupStandingDocument.class)
                    );

                    return new RetrieveResult<>(result.size(), result.size(), result);
                }
            }

            throw new IllegalStateException("No proper standings");
        } catch (IOException e) {
            log.error("Error reading standings from resources!");
            throw new RuntimeException(e);
        }
    }
}
