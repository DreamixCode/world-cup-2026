package eu.dreamix.wcapi.vo;

import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
public class Score extends MatchData<Integer> {
    public Score(Integer home, Integer away) {
        super(home, away);
    }

    public String getSymbol() {
        if(this.home == null || this.away == null) {
            return null;
        }

        final int compare = Integer.compare(this.getHome(), this.getAway());

        return compare > 0
               ? "1"
               : ((compare == 0) ? "X" : "2");
    }
}
