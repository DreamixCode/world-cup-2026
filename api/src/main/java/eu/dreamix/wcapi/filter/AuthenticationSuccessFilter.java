package eu.dreamix.wcapi.filter;

import eu.dreamix.wcapi.entity.UserDocument;
import eu.dreamix.wcapi.repository.UserRepository;
import eu.dreamix.wcapi.service.CrewService;
import eu.dreamix.wcapi.service.CurrentUserData;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@Component
@RequiredArgsConstructor
public class AuthenticationSuccessFilter extends OncePerRequestFilter {
    private final CurrentUserData currentUserData;
    private final UserRepository userRepository;
    private final CrewService crewService;

    @Override
    protected void doFilterInternal(final HttpServletRequest request, final HttpServletResponse response, final FilterChain filterChain) throws ServletException, IOException {
        final UserDocument jwtUser = currentUserData.getUserForPersistence();

        if (jwtUser != null) {
            log.debug("Saving user {}", jwtUser.getEmail());
            final UserDocument toSave = userRepository.findById(jwtUser.getId())
                    .map(existing -> {
                        existing.setFirstName(jwtUser.getFirstName());
                        existing.setLastName(jwtUser.getLastName());
                        existing.setEmail(jwtUser.getEmail());
                        existing.setPicture(jwtUser.getPicture());
                        return existing;
                    })
                    .orElseGet(() -> {
                        crewService.findSmallestCrewId().ifPresent(jwtUser::setCrew);
                        return jwtUser;
                    });
            userRepository.save(toSave);
        }

        filterChain.doFilter(request, response);
    }
}
