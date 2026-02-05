package eu.dreamix.wcapi.filter;

import eu.dreamix.wcapi.entity.UserDocument;
import eu.dreamix.wcapi.repository.UserRepository;
import eu.dreamix.wcapi.service.CurrentUserData;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@Component
@RequiredArgsConstructor
public class AuthenticationSuccessFilter extends OncePerRequestFilter {
    private final CurrentUserData currentUserData;
    private final UserRepository userRepository;

    @Override
    protected void doFilterInternal(final HttpServletRequest request, final HttpServletResponse response, final FilterChain filterChain) throws ServletException, IOException {
        final UserDocument user = currentUserData.getUserForPersistence();

        if (user != null) {
            log.debug("Saving user {}", user.getEmail());
            userRepository.save(user);
        }

        filterChain.doFilter(request, response);
    }
}
