import { useIsFetching, useQuery, useQueryClient } from "react-query";
import { getEvolutionChain } from "../api";
import { useAsyncCallback } from "react-async-hook";

export function useEvolutionChainQuery(chainId: string) {
  return useQuery<string[], Error, string[]>(
    ["evolution-chain", chainId],
    async () => getEvolutionChain(chainId)
  );
}

export async function usePrefetchEvolutionChain(chainId: string) {
  const queryClient = useQueryClient();
  const isFetching = useIsFetching(["evolution-chain", chainId]);

  return useAsyncCallback(async (id: string = chainId) => {
    if (!isFetching) {
      await queryClient.prefetchQuery(["evolution-chain", id], async () =>
        getEvolutionChain(id)
      );
    }
  });
}
