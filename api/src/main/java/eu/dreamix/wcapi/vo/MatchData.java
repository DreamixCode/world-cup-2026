package eu.dreamix.wcapi.vo;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MatchData<T>{
    protected final T home;
    protected final T away;
}
