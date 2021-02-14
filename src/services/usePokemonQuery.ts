import { useIsFetching, useQuery, useQueryClient } from "react-query";
import { useAsyncCallback } from "react-async-hook";
import { Pokemon, getPokemon } from "api";

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
