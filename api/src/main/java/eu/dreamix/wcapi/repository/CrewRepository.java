package eu.dreamix.wcapi.repository;

import eu.dreamix.wcapi.entity.CrewDocument;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CrewRepository extends MongoRepository<CrewDocument, String> {
}
