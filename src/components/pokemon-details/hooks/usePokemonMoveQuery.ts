import { useQuery } from "react-query";
import { PokemonMoveDetails } from "types/pokeapi";
import { getPokemonMove } from "api/getters/pokemon-move";

export function usePokemonMoveQuery(name: string) {
  return useQuery<PokemonMoveDetails, Error, PokemonMoveDetails>(
    ["pokemon-move", name],
    async () => getPokemonMove(name)
  );
}
