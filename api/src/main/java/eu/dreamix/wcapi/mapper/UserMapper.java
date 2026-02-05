package eu.dreamix.wcapi.mapper;

import eu.dreamix.wcapi.entity.UserDocument;
import eu.dreamix.wcapi.vo.UserData;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserData fromEntity(UserDocument document);
}
