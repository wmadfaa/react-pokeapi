import { useQuery } from "react-query";
import { PokemonMoveDetails, getPokemonMove } from "api";

export function usePokemonMoveQuery(name: string) {
  return useQuery<PokemonMoveDetails, Error, PokemonMoveDetails>(
    ["pokemon-move", name],
    async () => getPokemonMove(name)
  );
}
