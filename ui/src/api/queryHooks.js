import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { buildTeamsFromStandings } from "../userMascots";
import { CACHE_TIMES } from "./queryClient";
import { EuroCupApi } from "./queries";

export const queryKeys = {
  teams: () => ["teams"],
  groups: () => ["groups"],
  groupById: (id) => [...queryKeys.groups(), id],
  matches: () => ["matches"],
  matchById: (id) => [...queryKeys.matches(), id],
  bets: () => ["bets"],
  betsByFilters: (params) => [
    "bets",
    params?.userId ?? null,
    params?.matchId ?? null,
  ],
  myBets: () => ["myBets"],
  matchesByDate: (date) => [...queryKeys.matches(), date],
  users: () => ["users"],
  userById: (id) => [...queryKeys.users(), id],
  standings: () => ["standings"],
  topScorers: () => ["topScorers"],
  champions: () => ["champions"],
};

const defaultQueryOptions = {
  onError: console.log,
  staleTime: CACHE_TIMES.staleTime,
  gcTime: CACHE_TIMES.gcTime,
  refetchOnWindowFocus: false,
  placeholderData: keepPreviousData,
};

function useBetsInvalidator() {
  const queryClient = useQueryClient();
  return {
    invalidateBets: () =>
      queryClient.invalidateQueries({ queryKey: queryKeys.bets() }),
  };
}

function useMyBetsInvalidator() {
  const queryClient = useQueryClient();
  return {
    invalidateMyBets: () =>
      queryClient.invalidateQueries({ queryKey: queryKeys.myBets() }),
  };
}

function useMatchesInvalidator() {
  const queryClient = useQueryClient();
  return {
    invalidateMatches: () =>
      queryClient.invalidateQueries({ queryKey: queryKeys.matches() }),
  };
}

function useStandingsInvalidator() {
  const queryClient = useQueryClient();
  return {
    invalidateStandings: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.standings() });
      queryClient.invalidateQueries({ queryKey: queryKeys.teams() });
    },
  };
}

function useUsersInvalidator() {
  const queryClient = useQueryClient();
  return {
    invalidateUsers: () =>
      queryClient.invalidateQueries({ queryKey: queryKeys.users() }),
  };
}

export function useGroups() {
  const { data: groups, ...rest } = useQuery({
    queryKey: queryKeys.groups(),
    queryFn: () => EuroCupApi.getAllGroups(),
    ...defaultQueryOptions,
  });

  return { groups, ...rest };
}

export function useMatches(params) {
  const { data: matches, ...rest } = useQuery({
    queryKey: queryKeys.matchesByDate(params?.date ?? null),
    queryFn: () =>
      EuroCupApi.getAllMatches(
        params?.date ? { date: params.date } : undefined,
      ),
    ...defaultQueryOptions,
  });
  return { matches, ...rest };
}

export function useMatchById(id) {
  const hasValidId = Number.isFinite(Number(id));
  const {
    data: match,
    isFetching: isLoading,
    ...rest
  } = useQuery({
    queryKey: queryKeys.matchById(id),
    queryFn: () => EuroCupApi.getMatchById(id),
    enabled: hasValidId,
    ...defaultQueryOptions,
  });
  return { match, isLoading, ...rest };
}

export function useBets(params) {
  const {
    data: bets,
    isLoading: isLoadingBets,
    ...rest
  } = useQuery({
    queryKey: queryKeys.betsByFilters(params),
    queryFn: () =>
      EuroCupApi.getBets({
        userId: params?.userId,
        matchId: params?.matchId,
      }),
    ...defaultQueryOptions,
  });
  return { bets, isLoadingBets, ...rest };
}

export function useStandings() {
  const { data: standings, ...rest } = useQuery({
    queryKey: queryKeys.standings(),
    queryFn: () => EuroCupApi.getStandings(),
    ...defaultQueryOptions,
  });

  return { standings, ...rest };
}

export function useTeams() {
  const queryClient = useQueryClient();
  const { data: teams, ...rest } = useQuery({
    queryKey: queryKeys.teams(),
    queryFn: async () => {
      const standings = await queryClient.ensureQueryData({
        queryKey: queryKeys.standings(),
        queryFn: () => EuroCupApi.getStandings(),
      });
      return buildTeamsFromStandings(standings);
    },
    ...defaultQueryOptions,
  });

  return { teams, ...rest };
}

export function useTopScorers() {
  const { data: topScorers, ...rest } = useQuery({
    queryKey: queryKeys.topScorers(),
    queryFn: () => EuroCupApi.getTopScorers(),
    ...defaultQueryOptions,
  });

  return { topScorers, ...rest };
}

export function useChampions() {
  const { data: champions, ...rest } = useQuery({
    queryKey: queryKeys.champions(),
    queryFn: () => EuroCupApi.getChampions(),
    ...defaultQueryOptions,
  });

  return { champions, ...rest };
}

export function useMyBets() {
  const { data: myBets, ...rest } = useQuery({
    queryKey: queryKeys.myBets(),
    queryFn: () => EuroCupApi.getMyBets(),
    ...defaultQueryOptions,
  });
  return { myBets, ...rest };
}

export function usePlayerById(id) {
  const {
    data: player,
    isFetching: isLoading,
    ...rest
  } = useQuery({
    queryKey: queryKeys.userById(id),
    queryFn: () => EuroCupApi.getUserById(id),
    enabled: Boolean(id),
    ...defaultQueryOptions,
  });
  return { player, isLoading, ...rest };
}

export function useCreateBet() {
  const { invalidateBets } = useBetsInvalidator();
  const { invalidateMyBets } = useMyBetsInvalidator();
  const { invalidateMatches } = useMatchesInvalidator();
  const { invalidateStandings } = useStandingsInvalidator();
  const { invalidateUsers } = useUsersInvalidator();
  const {
    mutate: createBet,
    isPending: isLoadingCreate,
    ...rest
  } = useMutation({
    mutationFn: (bet) => EuroCupApi.createBet(bet),
    onSuccess: () => {
      invalidateMyBets();
      invalidateBets();
      invalidateMatches();
      invalidateStandings();
      invalidateUsers();
    },
    ...defaultQueryOptions,
  });

  return { createBet, isLoadingCreate, ...rest };
}

export function useSelectTopScorer() {
  const queryClient = useQueryClient();
  const {
    mutate: selectTopScorer,
    isPending: isLoadingSelect,
    ...rest
  } = useMutation({
    mutationFn: (payload) => EuroCupApi.selectTopScorer(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.topScorers() });
    },
    ...defaultQueryOptions,
  });

  return { selectTopScorer, isLoadingSelect, ...rest };
}

export function useSelectChampion() {
  const queryClient = useQueryClient();
  const {
    mutate: selectChampion,
    isPending: isLoadingSelect,
    ...rest
  } = useMutation({
    mutationFn: (payload) => EuroCupApi.selectChampion(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.champions() });
    },
    ...defaultQueryOptions,
  });

  return { selectChampion, isLoadingSelect, ...rest };
}
