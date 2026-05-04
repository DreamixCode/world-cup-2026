package eu.dreamix.wcapi.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Represents an authenticated user, stored in the {@code users} MongoDB collection.
 * <p>
 * Users are created or updated automatically on first authenticated request via the JWT filter.
 * The {@code id} is the Google subject claim ({@code sub}) from the OAuth2 JWT token.
 * Profile data (name, email, picture) is populated from the token claims.
 */
@Data
@Document("users")
@AllArgsConstructor
public class UserDocument {
    @Id
    public String id;
    public String firstName;
    private String lastName;
    private String email;
    private String picture;
}
