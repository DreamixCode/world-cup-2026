package eu.dreamix.wcapi.external.fbapi;

import lombok.Data;

import java.util.List;

@Data
public class TopScorerApiDto {
    private Player player;
    private List<Statistics> statistics;

    @Data
    public static class Player {
        private Integer id;
        private String name;
        private String nationality;
        private String photo;
    }

    @Data
    public static class Statistics {
        private Team team;
        private Goals goals;
    }

    @Data
    public static class Team {
        private Integer id;
        private String name;
    }

    @Data
    public static class Goals {
        private Integer total;
        private Integer assists;
    }
}
