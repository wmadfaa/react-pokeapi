import { useIsFetching, useQuery, useQueryClient } from "react-query";
import { getPokemon } from "../api";
import { useAsyncCallback } from "react-async-hook";
import { Pokemon } from "../types/pokeapi";

export function usePokemonQuery(id: string) {
  return useQuery<Pokemon, Error, Pokemon>(["pokemon", id], async () =>
    getPokemon(id)
  );
}

export async function usePrefetchPokemon(pokemonId: string) {
  const queryClient = useQueryClient();
  const isFetching = useIsFetching(["pokemon", pokemonId]);

  return useAsyncCallback(async (id: string = pokemonId) => {
    if (!isFetching) {
      await queryClient.prefetchQuery(["pokemon", id], async () =>
        getPokemon(id)
      );
    }
  });
}
