import { httpClient } from "../http-client";
import { PokemonsList } from "../pokeapi-types";
import { extractIdFromUrl, extractSearchParams } from "../utils";

export type PokemonsListParams = { limit: number; offset?: number };

export interface TransformedPokemonsList {
  previous: PokemonsListParams | null;
  next: PokemonsListParams | null;
  results: Record<"name" | "id", string>[];
}

export async function getPokemonsList(interval: {
  limit: number;
  offset?: number;
}): Promise<TransformedPokemonsList> {
  const { limit, offset } = interval;
  const {
    data: { previous, next, results },
  } = await httpClient.get<PokemonsList>(
    `pokemon?limit=${limit}&offset=${offset}`
  );

  const matchPokemonParams = (params: object) => params.hasOwnProperty("limit");

  const prevParams = previous
    ? extractSearchParams<PokemonsListParams>(previous, matchPokemonParams)
    : null;
  const nextParams = next
    ? extractSearchParams<PokemonsListParams>(next, matchPokemonParams)
    : null;

  return {
    previous: prevParams,
    next: nextParams,
    results: results.map(({ name, url }) => ({
      name,
      id: extractIdFromUrl(url),
    })),
  };
}
