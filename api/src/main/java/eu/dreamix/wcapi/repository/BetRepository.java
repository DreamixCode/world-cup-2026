package eu.dreamix.wcapi.repository;

import eu.dreamix.wcapi.entity.BetDocument;
import eu.dreamix.wcapi.vo.UserPointsProjection;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BetRepository extends MongoRepository<BetDocument, ObjectId> {

    @Query("{ 'match._id': { $eq: ?0 }, 'user.email': { $eq: ?1 } }")
    Optional<BetDocument> findByMatchIdAndUserEmail(Integer matchId, String userEmail);

    @Query("{ 'user.email' :  { $eq: ?0 } }")
    List<BetDocument> fetchByUserEmail(String email);

    @Aggregation(pipeline = {
            "{ $match: { 'match._id': ?0, isCalculated: false } }",
            "{ $set: { 'match.home': ?1,'match.away': ?2 } }",
            """
            { $set: {
               'match.symbol': {
                   $switch: {
                       branches: [
                           { case: {$gt: ['$match.home', '$match.away']}, then: '1' },
                           { case: {$lt: ['$match.home', '$match.away']}, then: '2' },
                           { case: {$eq: ['$match.home', '$match.away']}, then: 'X' }
                       ]
                   }
               },
               'bet.symbol': {
                   $switch: {
                       branches: [
                           { case: {$gt: ['$bet.home', '$bet.away']}, then: '1' },
                           { case: {$lt: ['$bet.home', '$bet.away']}, then: '2' },
                           { case: {$eq: ['$bet.home', '$bet.away']}, then: 'X' }
                       ]
                   }
               }
            } }
            """,
            """
            { $set: {
                'points': {
                    $switch: {
                        branches: [
                            { case: {$and: [{$eq: ['$match.away', '$bet.away']}, {$eq: ['$match.home', '$bet.home']} ]}, then: 3 },
                            { case: {$eq: ['$match.symbol', '$bet.symbol']}, then: 1 }
                                ],
                                default: 0
                            }
                        },
                        isCalculated: true
                    } }
                    """,
            "{ $unset: ['match.symbol', 'bet.symbol'] }"
    })
    List<BetDocument> calculateBets(Integer matchId, Integer home, Integer away);

    @Aggregation(pipeline = {
            "{ $group : { '_id' : '$user._id', 'totalPoints' : { $sum : '$points' } } }",
            "{ $sort : { totalPoints : -1 } }",
            "{ $lookup: { from: 'users', localField: '_id', foreignField: '_id', as: 'userData'} }",
            "{ $unwind: '$userData' }",
            "{ $unset: 'userData._class' }",
            "{ $project : { _id : 0, user : '$userData', totalPoints : 1 } }"
    })
    List<UserPointsProjection> usersTotalPointsFromBets();
}
