package eu.dreamix.wcapi.service;

import eu.dreamix.wcapi.entity.UserDocument;
import eu.dreamix.wcapi.vo.UserData;

public interface CurrentUserData {
    UserData getCurrentUserData();

    UserDocument getUserForPersistence();
}
