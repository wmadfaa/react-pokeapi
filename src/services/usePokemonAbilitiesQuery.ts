import { useIsFetching, useQuery, useQueryClient } from "react-query";
import { getPokemon, getPokemonAbilities } from "../api";
import { useAsyncCallback } from "react-async-hook";
import { Ability } from "../types/pokeapi";

export function usePokemonAbilitiesQuery(id: string) {
  return useQuery<Ability[], Error, Ability[]>(
    ["pokemon-abilities", id],
    async () => getPokemonAbilities(id)
  );
}

export async function usePrefetchPokemonAbility(abilityId: string) {
  const queryClient = useQueryClient();
  const isFetching = useIsFetching(["pokemon-abilities", abilityId]);

  return useAsyncCallback(async (id: string = abilityId) => {
    if (!isFetching) {
      await queryClient.prefetchQuery(["pokemon-abilities", id], async () =>
        getPokemon(id)
      );
    }
  });
}
