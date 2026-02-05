package eu.dreamix.wcapi.external;

import eu.dreamix.wcapi.entity.GroupStandingDocument;

import java.util.List;

public interface StandingRetrievalAdapter {
    RetrieveResult<List<GroupStandingDocument>> actualizeGroupStandings();
}
