package eu.dreamix.wcapi.service;

import eu.dreamix.wcapi.dto.UserProfileDto;

public interface UserService {
    UserProfileDto getProfile(String userId);
}