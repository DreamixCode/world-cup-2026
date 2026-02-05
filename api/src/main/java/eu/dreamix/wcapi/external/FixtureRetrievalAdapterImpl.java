package eu.dreamix.wcapi.external;

import com.fasterxml.jackson.databind.ObjectMapper;
import eu.dreamix.wcapi.entity.FixtureDocument;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ClassPathResource;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Slf4j
//@Service
@RequiredArgsConstructor
public class FixtureRetrievalAdapterImpl implements FixtureRetrievalAdapter {
    private final ObjectMapper mapper;

    @Override
    public RetrieveResult<List<FixtureDocument>> actualizeFixtures() {
        try {
            final InputStream fixturesStream = new ClassPathResource("season2022/fixtures.json")
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
