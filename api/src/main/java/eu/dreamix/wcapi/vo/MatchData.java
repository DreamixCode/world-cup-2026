package eu.dreamix.wcapi.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MatchData<T>{
    protected T home;
    protected T away;
}
