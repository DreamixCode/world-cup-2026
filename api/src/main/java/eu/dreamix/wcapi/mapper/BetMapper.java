package eu.dreamix.wcapi.mapper;

import eu.dreamix.wcapi.dto.BetDto;
import eu.dreamix.wcapi.entity.BetDocument;
import eu.dreamix.wcapi.vo.MatchData;
import eu.dreamix.wcapi.vo.Score;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface BetMapper {
    @Mapping(source = "match.id", target = "matchId")
    BetDto documentToDto(BetDocument document);

    static Score map(MatchData<Integer> bet) {
        return new Score(bet.getHome(), bet.getAway());
    }
}
