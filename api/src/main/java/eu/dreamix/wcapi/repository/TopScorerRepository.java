package eu.dreamix.wcapi.repository;

import eu.dreamix.wcapi.entity.TopScorerDocument;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TopScorerRepository extends MongoRepository<TopScorerDocument, Integer> {
    List<TopScorerDocument> findAllByOrderByGoalsDesc();
}
