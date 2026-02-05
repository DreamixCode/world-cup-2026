package eu.dreamix.wcapi.service;

import eu.dreamix.wcapi.entity.GroupStandingDocument;
import eu.dreamix.wcapi.external.RetrieveResult;
import eu.dreamix.wcapi.external.StandingRetrievalAdapter;
import eu.dreamix.wcapi.repository.GroupStandingRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class UpdateGroupStandingsServiceImpl implements UpdateGroupStandingsService {
    private final GroupStandingRepository repository;
    private final StandingRetrievalAdapter standingRetrievalAdapter;

    @Override
    public void updateGroupStandings() {
        final RetrieveResult<List<GroupStandingDocument>> listRetrieveResult = standingRetrievalAdapter.actualizeGroupStandings();
        repository.deleteAll();
        repository.saveAll(listRetrieveResult.data());
    }
}
