package eu.dreamix.wcapi.external;

import eu.dreamix.wcapi.entity.TopScorerDocument;

import java.util.List;

public interface TopScorerRetrievalAdapter {
    RetrieveResult<List<TopScorerDocument>> actualizeTopScorers();
}
