package eu.dreamix.wcapi.service;

import eu.dreamix.wcapi.dto.ChampionDto;
import eu.dreamix.wcapi.dto.ChampionSelectRequest;

import java.util.List;

public interface ChampionService {
    List<ChampionDto> getChampions(String userId);
    void selectChampion(String userId, ChampionSelectRequest request);
}
