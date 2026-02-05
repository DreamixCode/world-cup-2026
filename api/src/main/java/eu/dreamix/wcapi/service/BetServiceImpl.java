package eu.dreamix.wcapi.service;

import eu.dreamix.wcapi.dto.BetFilter;
import eu.dreamix.wcapi.entity.BetDocument;
import eu.dreamix.wcapi.entity.FixtureDocument;
import eu.dreamix.wcapi.repository.BetRepository;
import eu.dreamix.wcapi.vo.Score;
import eu.dreamix.wcapi.vo.UserData;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class BetServiceImpl implements BetService {
    private final BetRepository betRepository;
    private final MongoTemplate mongoTemplate;

    @Override
    public void postBet(UserData user, FixtureDocument match, final Integer home, final Integer away) {
        final Score bet = new Score(home, away);
        final BetDocument.Match betMatch = new BetDocument.Match(match.getId(), null, null);
        final BetDocument.User betUser = new BetDocument.User(user.id(), user.firstName(), user.lastName(), user.email(), user.picture());

        final BetDocument betDocument = new BetDocument();
        betDocument.setBet(bet);
        betDocument.setMatch(betMatch);
        betDocument.setUser(betUser);

        betRepository.insert(betDocument);
    }

    @Override
    public void updateBet(final BetDocument betDocument, final Integer home, final Integer away) {
        final Score bet = new Score(home, away);
        betDocument.setBet(bet);

        betRepository.save(betDocument);
    }

    @Override
    public Optional<BetDocument> findByMatchAndUser(final Integer matchId, final String userEmail) {
        return betRepository.findByMatchIdAndUserEmail(matchId, userEmail);
    }

    @Override
    public List<BetDocument> fetchByUser(final String userEmail) {
        return betRepository.fetchByUserEmail(userEmail);
    }

    @Override
    public void calculateBets(final Integer matchId, final Score score) {
        // TODO: How can I use update directly with the aggregation?
        log.info("Received calculation request - {} {}", matchId, score);
        final List<BetDocument> betDocuments = betRepository.calculateBets(matchId, score.getHome(), score.getAway());

        if (betDocuments.isEmpty()) {
            log.info("No bets to calculate for match {}", matchId);
        }

        log.info("Updating {} bets for match {}", betDocuments.size(), matchId);
        betRepository.saveAll(betDocuments);
    }

    @Override
    public List<BetDocument> searchByCriteria(final BetFilter betFilter) {
        Query query = new Query();
        if (betFilter.userId() != null) {
            query.addCriteria(Criteria.where("user._id").is(betFilter.userId()));
        }

        if(betFilter.matchId() != null) {
            query.addCriteria(Criteria.where("match._id").is(betFilter.matchId()));
        }

        return mongoTemplate.find(query, BetDocument.class);
    }
}
