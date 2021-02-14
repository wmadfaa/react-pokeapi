import { useQuery } from "react-query";
import { Ability } from "types/pokeapi";
import { getPokemonAbility } from "api/getters/pokemon-ability";

export function usePokemonAbilityQuery(name: string) {
  return useQuery<Ability, Error, Ability>(
    ["pokemon-ability", name],
    async () => getPokemonAbility(name)
  );
}
