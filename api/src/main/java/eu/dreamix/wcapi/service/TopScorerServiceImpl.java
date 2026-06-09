package eu.dreamix.wcapi.service;

import eu.dreamix.wcapi.dto.TopScorerDto;
import eu.dreamix.wcapi.dto.TopScorerSelectRequest;
import eu.dreamix.wcapi.entity.TopScorerDocument;
import eu.dreamix.wcapi.entity.TopScorerPickDocument;
import eu.dreamix.wcapi.external.TopScorerRetrievalAdapter;
import eu.dreamix.wcapi.repository.TopScorerPickRepository;
import eu.dreamix.wcapi.repository.TopScorerRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class TopScorerServiceImpl implements TopScorerService {
    private final TopScorerRepository topScorerRepository;
    private final TopScorerPickRepository topScorerPickRepository;
    private final TopScorerRetrievalAdapter topScorerRetrievalAdapter;

    @Override
    public List<TopScorerDto> getTopScorers(final String userId) {
        final List<TopScorerDocument> docs = topScorerRepository.findAllByOrderByGoalsDesc();
        final List<TopScorerDocument> source = docs.isEmpty()
                ? topScorerRetrievalAdapter.actualizeTopScorers().data()
                : docs;

        final Integer pickedId = topScorerPickRepository.findById(userId)
                .map(TopScorerPickDocument::getTopScorerId)
                .orElse(null);

        return source.stream()
                .map(doc -> toDto(doc, doc.getId().equals(pickedId)))
                .sorted(Comparator.comparingInt(dto -> dto.selected() ? 0 : 1))
                .toList();
    }

    @Override
    public void updateTopScorers() {
        final var result = topScorerRetrievalAdapter.actualizeTopScorers();
        topScorerRepository.saveAll(result.data());
        log.info("Top scorers updated: {} records", result.data().size());
    }

    @Override
    public void selectTopScorer(final String userId, final TopScorerSelectRequest request) {
        final TopScorerPickDocument pick = new TopScorerPickDocument(userId, request.id(), request.name());
        topScorerPickRepository.save(pick);
        log.info("User {} selected top scorer {}", userId, request.id());
    }

    private TopScorerDto toDto(final TopScorerDocument doc, final boolean selected) {
        return new TopScorerDto(doc.getId(), doc.getName(), doc.getNationality(), doc.getPhoto(), doc.getTeamName(), doc.getGoals(), selected);
    }
}
