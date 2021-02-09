import { useIsFetching, useQuery, useQueryClient } from "react-query";
import { getPokemon, getEvolutionChain } from "../api";
import { useAsyncCallback } from "react-async-hook";
import { EvolutionChain } from "../types/pokeapi";

export function useEvolutionChainQuery(id: string) {
  return useQuery<EvolutionChain, Error, EvolutionChain>(
    ["evolution-chain", id],
    async () => getEvolutionChain(id)
  );
}

export async function usePrefetchEvolutionChain(pokemonId: string) {
  const queryClient = useQueryClient();
  const isFetching = useIsFetching(["evolution-chain", pokemonId]);

  return useAsyncCallback(async (id: string = pokemonId) => {
    if (!isFetching) {
      await queryClient.prefetchQuery(["evolution-chain", id], async () =>
        getPokemon(id)
      );
    }
  });
}
