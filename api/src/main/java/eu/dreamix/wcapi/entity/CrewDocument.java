package eu.dreamix.wcapi.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("crews")
@AllArgsConstructor
@NoArgsConstructor
public class CrewDocument {
    @Id
    private String id;
    private String name;
}
