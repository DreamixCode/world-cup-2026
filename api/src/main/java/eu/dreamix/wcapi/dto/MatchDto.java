package eu.dreamix.wcapi.dto;

import eu.dreamix.wcapi.entity.Fixture;
import eu.dreamix.wcapi.vo.MatchData;
import eu.dreamix.wcapi.vo.Score;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.ZonedDateTime;

@Data
public class MatchDto {
    private Integer id;
    private ZonedDateTime date;
    private Fixture.Status status;
    private MatchData<TeamDto> teams;
    private ScoreDto score;
    private String round;

    public record TeamDto(Integer id, String name, String logo, Boolean winner) {}

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static final class ScoreDto {
        private Score goals;
        private Score extraTime;
        private Score penalty;
    }
}
