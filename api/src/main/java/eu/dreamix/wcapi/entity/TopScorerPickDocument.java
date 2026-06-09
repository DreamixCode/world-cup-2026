package eu.dreamix.wcapi.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document("top_scorer_picks")
public class TopScorerPickDocument {
    @Id
    private String userId;
    private Integer topScorerId;
    private String topScorerName;
}
