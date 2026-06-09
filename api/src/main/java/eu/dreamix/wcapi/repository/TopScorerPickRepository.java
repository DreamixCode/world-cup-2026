package eu.dreamix.wcapi.repository;

import eu.dreamix.wcapi.entity.TopScorerPickDocument;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TopScorerPickRepository extends MongoRepository<TopScorerPickDocument, String> {
}
