import { useIsFetching, useQuery, useQueryClient } from "react-query";
import { getPokemon, getPokemonAbility } from "../api";
import { useAsyncCallback } from "react-async-hook";
import { Ability } from "../types/pokeapi";

export function usePokemonAbilityQuery(id: string) {
  return useQuery<Ability, Error, Ability>(["pokemon-ability", id], async () =>
    getPokemonAbility(id)
  );
}

export async function usePrefetchPokemonAbility(abilityId: string) {
  const queryClient = useQueryClient();
  const isFetching = useIsFetching(["pokemon-ability", abilityId]);

  return useAsyncCallback(async (id: string = abilityId) => {
    if (!isFetching) {
      await queryClient.prefetchQuery(["pokemon-ability", id], async () =>
        getPokemon(id)
      );
    }
  });
}
