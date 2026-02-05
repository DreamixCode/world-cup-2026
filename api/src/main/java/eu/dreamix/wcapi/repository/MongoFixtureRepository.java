package eu.dreamix.wcapi.repository;

import eu.dreamix.wcapi.entity.FixtureDocument;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface MongoFixtureRepository extends MongoRepository<FixtureDocument, Integer> {

    @Query("{'fixture.date':  {$gte: ?0, $lt: ?1}}")
    List<FixtureDocument> findBetweenDates(LocalDateTime dateFrom, LocalDateTime dateTo);
}
