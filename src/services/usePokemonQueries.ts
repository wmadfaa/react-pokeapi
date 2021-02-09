import { QueryObserverResult, useQueries, UseQueryOptions } from "react-query";
import { getPokemon } from "../api";
import { Pokemon } from "../types/pokeapi";
import { useMemo } from "react";

export function usePokemonQueries(
  ids: string[]
): QueryObserverResult<Pokemon, Error>[] {
  const queriesCollection = useMemo(
    () =>
      ids.map<UseQueryOptions>((id) => ({
        queryKey: ["pokemon", id],
        queryFn: async () => getPokemon(id),
      })),
    [ids]
  );
  // @ts-ignore
  return useQueries(queriesCollection);
}
