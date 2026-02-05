package eu.dreamix.wcapi.mapper;

import eu.dreamix.wcapi.dto.GroupStandingDto;
import eu.dreamix.wcapi.entity.GroupStandingDocument;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface GroupStandingMapper {

    @Mapping(source = "team.id", target = "id")
    @Mapping(source = "team.name", target = "name")
    @Mapping(source = "all.played", target = "played")
    @Mapping(source = "all.win", target = "win")
    @Mapping(source = "all.draw", target = "draw")
    @Mapping(source = "all.lose", target = "lose")
    GroupStandingDto.Team documentToTeamDto(GroupStandingDocument document);
}
