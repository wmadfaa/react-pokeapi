import { useIsFetching, useQuery, useQueryClient } from "react-query";
import { getPokemonMoveDetails } from "../api";
import { useAsyncCallback } from "react-async-hook";
import { PokemonMoveDetails } from "../types/pokeapi";

export function usePokemonMoveDetails(id: string) {
  return useQuery<PokemonMoveDetails[], Error, PokemonMoveDetails[]>(
    ["pokemon-move-details", id],
    async () => getPokemonMoveDetails(id)
  );
}

export async function usePrefetchPokemonMoveDetails(pokemonId: string) {
  const queryClient = useQueryClient();
  const isFetching = useIsFetching(["pokemon-move-details", pokemonId]);

  return useAsyncCallback(async (id: string = pokemonId) => {
    if (!isFetching) {
      await queryClient.prefetchQuery(["pokemon-move-details", id], async () =>
        getPokemonMoveDetails(id)
      );
    }
  });
}
