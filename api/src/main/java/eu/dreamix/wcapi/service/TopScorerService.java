package eu.dreamix.wcapi.service;

import eu.dreamix.wcapi.dto.TopScorerDto;
import eu.dreamix.wcapi.dto.TopScorerSelectRequest;

import java.util.List;

public interface TopScorerService {
    List<TopScorerDto> getTopScorers(String userId);
    void updateTopScorers();
    void selectTopScorer(String userId, TopScorerSelectRequest request);
}
