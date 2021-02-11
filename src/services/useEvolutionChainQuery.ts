import { useIsFetching, useQuery, useQueryClient } from "react-query";
import { getEvolutionChainByPokemonId } from "../api";
import { useAsyncCallback } from "react-async-hook";
import { Pokemon } from "../types/pokeapi";

export function useEvolutionChainQuery(pokemonId: string) {
  return useQuery<Pokemon[], Error, Pokemon[]>(
    ["evolution-chain", pokemonId],
    async () => getEvolutionChainByPokemonId(pokemonId)
  );
}

export async function usePrefetchEvolutionChain(pokemonId: string) {
  const queryClient = useQueryClient();
  const isFetching = useIsFetching(["evolution-chain", pokemonId]);

  return useAsyncCallback(async (id: string = pokemonId) => {
    if (!isFetching) {
      await queryClient.prefetchQuery(["evolution-chain", id], async () =>
        getEvolutionChainByPokemonId(id)
      );
    }
  });
}
