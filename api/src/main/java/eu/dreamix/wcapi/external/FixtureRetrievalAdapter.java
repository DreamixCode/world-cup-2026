package eu.dreamix.wcapi.external;

import eu.dreamix.wcapi.entity.FixtureDocument;

import java.util.List;

public interface FixtureRetrievalAdapter {
    RetrieveResult<List<FixtureDocument>> actualizeFixtures();
}
