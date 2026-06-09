package eu.dreamix.wcapi.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document("top_scorers")
public class TopScorerDocument {
    @Id
    private Integer id;
    private String name;
    private String nationality;
    private String photo;
    private String teamName;
    private Integer goals;
}
