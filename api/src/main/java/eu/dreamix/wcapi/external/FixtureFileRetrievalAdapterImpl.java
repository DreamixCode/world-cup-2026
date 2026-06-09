package eu.dreamix.wcapi.external;

import com.fasterxml.jackson.databind.ObjectMapper;
import eu.dreamix.wcapi.entity.FixtureDocument;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Profile;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

/**
 * File-based implementation of {@link FixtureRetrievalAdapter} intended for local development
 * and testing <strong>without</strong> a live Football API key.
 * <p>
 * Reads fixture data from {@code classpath:season2022/fixtures.json} and deserialises it into
 * {@link eu.dreamix.wcapi.entity.FixtureDocument} objects. The fixture id is derived from the
 * nested {@code fixture.id} field to align with the structure expected by the rest of the app.
 * <p>
 * Active only when the {@code mock-data} Spring profile is enabled.
 * When the profile is not active, {@link FixtureRetrievalApiAdapter} is used instead.
 */
@Slf4j
@Service
@Profile("mock-data")
@RequiredArgsConstructor
public class FixtureFileRetrievalAdapterImpl implements FixtureRetrievalAdapter {
    private final ObjectMapper mapper;

    @Override
    public RetrieveResult<List<FixtureDocument>> actualizeFixtures() {
        try {
            final InputStream fixturesStream = new ClassPathResource("season2026/fixtures.json")
                                                       .getInputStream();

            final List<FixtureDocument> result = mapper.readValue(
                    fixturesStream, mapper.getTypeFactory().constructCollectionType(List.class, FixtureDocument.class)
            );

            result.forEach(fixture -> {
                fixture.setId(fixture.getFixture().getId());
            });
            return new RetrieveResult(result.size(), result.size(), result);
        } catch (IOException e) {
            log.error("Error reading fixtures from resources!");
            throw new RuntimeException(e);
        }
    }
}
