package eu.dreamix.wcapi.dto;

public record TopScorerDto(
        Integer id,
        String name,
        String nationality,
        String photo,
        String teamName,
        Integer goals,
        boolean selected
) {}
