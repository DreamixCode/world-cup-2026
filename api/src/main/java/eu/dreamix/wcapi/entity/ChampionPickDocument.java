package eu.dreamix.wcapi.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document("champion_picks")
public class ChampionPickDocument {
    @Id
    private String userId;
    private Integer championId;
    private String championName;
}
