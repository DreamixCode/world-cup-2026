package eu.dreamix.wcapi.service;

import eu.dreamix.wcapi.dto.BetFilter;
import eu.dreamix.wcapi.entity.BetDocument;
import eu.dreamix.wcapi.entity.FixtureDocument;
import eu.dreamix.wcapi.vo.Score;
import eu.dreamix.wcapi.vo.UserData;

import java.util.List;
import java.util.Optional;

public interface BetService {
    void postBet(UserData user, FixtureDocument match, Integer home, Integer away);

    void updateBet(BetDocument betDocument, Integer home, Integer away);

    Optional<BetDocument> findByMatchAndUser(Integer matchId, String userEmail);

    List<BetDocument> fetchByUser(String userEmail); // TODO: Should I change it to generic filtering?

    void calculateBets(Integer matchId, Score score);

    List<BetDocument> searchByCriteria(BetFilter betFilter);
}
