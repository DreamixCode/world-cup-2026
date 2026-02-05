package eu.dreamix.wcapi.repository;

import eu.dreamix.wcapi.entity.FixtureDocument;

import java.util.List;

public interface FixtureRepository {
    List<FixtureDocument> findAll();
}
