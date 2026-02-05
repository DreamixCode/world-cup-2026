package eu.dreamix.wcapi.service;

import eu.dreamix.wcapi.entity.UserDocument;
import eu.dreamix.wcapi.mapper.UserMapper;
import eu.dreamix.wcapi.vo.GoogleConstants;
import eu.dreamix.wcapi.vo.UserData;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.stereotype.Service;

import java.util.Map;

@Slf4j
@Service
@RequiredArgsConstructor
public class CurrentUserDataImpl implements CurrentUserData {
    private final UserMapper mapper;

    @Override
    public UserData getCurrentUserData() {
        return mapper.fromEntity(getUserForPersistence());
    }

    @Override
    public UserDocument getUserForPersistence() {
        final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication instanceof JwtAuthenticationToken jwtAuthenticationToken) {
            final Map<String, Object> claims = jwtAuthenticationToken.getToken().getClaims();

            final String id = (String)claims.get(GoogleConstants.JWT_CLAIM_SUB);
            final String firstName = (String)claims.get(GoogleConstants.JWT_CLAIM_FIRST_NAME);
            final String lastName = (String)claims.get(GoogleConstants.JWT_CLAIM_LAST_NAME);
            final String email = (String)claims.get(GoogleConstants.JWT_CLAIM_EMAIL);
            final String picture = (String)claims.get(GoogleConstants.JWT_CLAIM_PICTURE);

            return new UserDocument(id, firstName, lastName, email, picture);
        }

        // Non supported login method. Should not happen
        return null;
    }
}
