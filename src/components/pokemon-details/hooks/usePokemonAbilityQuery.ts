import { useQuery } from "react-query";
import { Ability, getPokemonAbility } from "api";

export function usePokemonAbilityQuery(name: string) {
  return useQuery<Ability, Error, Ability>(
    ["pokemon-ability", name],
    async () => getPokemonAbility(name)
  );
}
