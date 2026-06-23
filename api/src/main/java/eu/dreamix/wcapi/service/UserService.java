package eu.dreamix.wcapi.service;

import eu.dreamix.wcapi.dto.UserProfileDto;
import eu.dreamix.wcapi.entity.UserDocument;

public interface UserService {
    UserProfileDto getProfile(String userId);
    UserDocument assignCrew(String userId, String crewId);
    void unassignCrew(String userId);
}