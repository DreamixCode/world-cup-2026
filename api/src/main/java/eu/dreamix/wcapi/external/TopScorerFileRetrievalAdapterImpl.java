package eu.dreamix.wcapi.external;

import com.fasterxml.jackson.databind.ObjectMapper;
import eu.dreamix.wcapi.entity.TopScorerDocument;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Profile;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Slf4j
@Component
@Profile("mock-data")
@RequiredArgsConstructor
public class TopScorerFileRetrievalAdapterImpl implements TopScorerRetrievalAdapter {
    private final ObjectMapper mapper;

    @Override
    public RetrieveResult<List<TopScorerDocument>> actualizeTopScorers() {
        try {
            final InputStream stream = new ClassPathResource("season2026/topscorers.json").getInputStream();
            final List<TopScorerDocument> result = mapper.readValue(
                    stream, mapper.getTypeFactory().constructCollectionType(List.class, TopScorerDocument.class)
            );
            return new RetrieveResult<>(result.size(), result.size(), result);
        } catch (IOException e) {
            log.error("Error reading top scorers from resources!");
            throw new RuntimeException(e);
        }
    }
}
