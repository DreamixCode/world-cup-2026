package eu.dreamix.wcapi.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

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
