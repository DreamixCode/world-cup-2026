package eu.dreamix.wcapi.repository;

import eu.dreamix.wcapi.entity.UserDocument;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<UserDocument, String> {
}
