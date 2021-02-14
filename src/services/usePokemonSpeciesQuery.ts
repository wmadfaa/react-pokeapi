import { useIsFetching, useQuery, useQueryClient } from "react-query";
import { useAsyncCallback } from "react-async-hook";
import { PokemonSpecies, getPokemonSpecies, getPokemon } from "api";

export function usePokemonSpeciesQuery(id: string) {
  return useQuery<PokemonSpecies, Error, PokemonSpecies>(
    ["pokemon-species", id],
    async () => getPokemonSpecies(id)
  );
}

export async function usePrefetchPokemonSpecies(speciesId: string) {
  const queryClient = useQueryClient();
  const isFetching = useIsFetching(["pokemon-species", speciesId]);

  return useAsyncCallback(async (id: string = speciesId) => {
    if (!isFetching) {
      await queryClient.prefetchQuery(["pokemon-species", id], async () =>
        getPokemon(id)
      );
    }
  });
}
