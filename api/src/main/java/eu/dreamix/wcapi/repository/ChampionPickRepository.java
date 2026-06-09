package eu.dreamix.wcapi.repository;

import eu.dreamix.wcapi.entity.ChampionPickDocument;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ChampionPickRepository extends MongoRepository<ChampionPickDocument, String> {
}
