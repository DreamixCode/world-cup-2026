import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { EuroCupApi } from "./queries";

export const queryKeys = {
  teams: () => ["teams"],
  groups: () => ["groups"],
  groupById: (id) => [...queryKeys.groups(), id],
  matches: () => ["matches"],
  matchById: (id) => [...queryKeys.matches(), id],
  bets: () => ["bets"],
  myBets: () => ["myBets"],
  matchesByDate: (date) => [...queryKeys.matches(), date],
  users: () => ["users"],
  userById: (id) => [...queryKeys.users(), id],
  standings: () => ["standings"],
};

const defaultQueryOptions = {
  onError: console.log,
};

function useBetsInvalidator() {
  const queryClient = useQueryClient();
  return {
    invalidateBets: () => queryClient.invalidateQueries(queryKeys.bets()),
  };
}

function useMyBetsInvalidator() {
  const queryClient = useQueryClient();
  return {
    invalidateMyBets: () => queryClient.invalidateQueries(queryKeys.myBets()),
  };
}

function useMatchesInvalidator() {
  const queryClient = useQueryClient();
  return {
    invalidateMatches: () => queryClient.invalidateQueries(queryKeys.matches()),
  };
}

export function useGroups() {
  const { data: groups, ...rest } = useQuery({
    queryKey: queryKeys.groups(),
    queryFn: async () => EuroCupApi.getAllGroups(),
    ...defaultQueryOptions,
    keepPreviousData: true,
  });

  return { groups, ...rest };
}

export function useMatches(params) {
  const { data: matches, ...rest } = useQuery({
    queryKey: queryKeys.matches(),
    queryFn: () => {
      const queryParams = {
        date: params?.date,
      };
      return EuroCupApi.getAllMatches(queryParams);
    },
  });
  return { matches, ...rest };
}

export function useMatchById(id) {
  const {
    data: match,
    isFetching: isLoading,
    ...rest
  } = useQuery({
    queryKey: queryKeys.matchById(id),
    queryFn: () => EuroCupApi.getMatchById(id),
    keepPreviousData: true,
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
    queryKey: queryKeys.bets(),
    queryFn: () => {
      const queryParams = {
        userId: params?.userId,
        matchId: params?.matchId,
      };
      return EuroCupApi.getBets(queryParams);
    },
  });
  return { bets, isLoadingBets, ...rest };
}

export function useStandings() {
  const { data: standings, ...rest } = useQuery({
    queryKey: queryKeys.standings(),
    queryFn: () => EuroCupApi.getStandings(),
    keepPreviousData: true,
    ...defaultQueryOptions,
  });

  return { standings, ...rest };
}

export function useMyBets() {
  const { data: myBets, ...rest } = useQuery({
    queryKey: queryKeys.myBets(),
    queryFn: () => EuroCupApi.getMyBets(),
    keepPreviousData: true,
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
    keepPreviousData: true,
    ...defaultQueryOptions,
  });
  return { player, isLoading, ...rest };
}

export function useCreateBet() {
  const { invalidateBets } = useBetsInvalidator();
  const { invalidateMyBets } = useMyBetsInvalidator();
  const { invalidateMatches } = useMatchesInvalidator();
  const {
    mutate: createBet,
    isLoading: isLoadingCreate,
    ...rest
  } = useMutation({
    mutationFn: (bet) => EuroCupApi.createBet(bet),
    onSuccess: () => {
      invalidateMyBets();
      invalidateBets();
      invalidateMatches();
    },
    ...defaultQueryOptions,
  });

  return { createBet, isLoadingCreate, ...rest };
}
