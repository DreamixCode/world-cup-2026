package eu.dreamix.wcapi.controller;

import eu.dreamix.wcapi.dto.UserProfileDto;
import eu.dreamix.wcapi.service.UserService;
import eu.dreamix.wcapi.vo.UserData;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserControllerUnitTest {
    @Mock
    private UserService userService;

    @InjectMocks
    private UserController userController;

    @Test
    void getByIdShouldDelegateToService() {
        final UserProfileDto expected = new UserProfileDto(
                new UserData("u-1", "Ana", "Ivanova", "ana@dreamix.eu", "http://img", null),
                7,
                List.of()
        );

        when(userService.getProfile("u-1")).thenReturn(expected);

        final UserProfileDto result = userController.getById("u-1");

        assertEquals(expected, result);
    }
}