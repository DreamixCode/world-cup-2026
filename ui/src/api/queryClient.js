import { QueryClient } from "@tanstack/react-query";

export const CACHE_TIMES = {
  staleTime: 5 * 60 * 1000,
  gcTime: 30 * 60 * 1000,
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: CACHE_TIMES.staleTime,
      gcTime: CACHE_TIMES.gcTime,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});
