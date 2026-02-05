package eu.dreamix.wcapi.repository;

import eu.dreamix.wcapi.entity.GroupStandingDocument;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GroupStandingRepository extends MongoRepository<GroupStandingDocument, ObjectId> {
}
