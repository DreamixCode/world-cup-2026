package eu.dreamix.wcapi.mapper;

import eu.dreamix.wcapi.dto.MatchDto;
import eu.dreamix.wcapi.entity.FixtureDocument;
import eu.dreamix.wcapi.entity.StatusType;
import eu.dreamix.wcapi.vo.MatchData;
import eu.dreamix.wcapi.vo.Score;
import org.mapstruct.*;

import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;

@Mapper(componentModel = "spring")
public interface MatchMapper {
    @Mapping(source = "fixture.date", target = "date", qualifiedByName = "localToUTC")
    @Mapping(source = "score.penalty", target = "score.penalty")
    @Mapping(source = "score.fulltime", target = "score.goals")
    @Mapping(source = "league.round", target = "round")
    @Mapping(source = "fixture.status", target = "status")
    MatchDto fixtureToMatch(FixtureDocument fixture);

    @Named("localToUTC")
    static ZonedDateTime localToUTC(Instant utcDate) {
        return utcDate.atZone(ZoneId.of("UTC"));
    }

    static Score map(MatchData<Integer> score) {
        return new Score(score.getHome(), score.getAway());
    }

    @AfterMapping
    default void setExtraTime(FixtureDocument document, @MappingTarget MatchDto result) {
        final StatusType status = document.getFixture().getStatus().getType();

        if (status == StatusType.AET || status == StatusType.PEN) {
            result.getScore().setExtraTime(new Score(document.getGoals().getHome(), document.getGoals().getAway()));
        }
    }
}
