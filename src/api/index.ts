import axios from "axios";
import { extractSearchParams } from "../utils/api";

const BASE_URL = "https://pokeapi.co/api/v2/";

export const api = axios.create({
  baseURL: BASE_URL,
});

export type PokemonsListParams = { limit: number; offset?: number };
export interface PokemonsList {
  previous: PokemonsListParams | null;
  next: PokemonsListParams | null;
  results: Record<"name" | "url", string>[];
}

export async function getPokemonsList(
  limit: number,
  offset?: number
): Promise<PokemonsList> {
  console.info("fetch pokemons", { limit, offset });
  const {
    data: { previous, next, results },
  } = await api.get(`pokemon?limit=${limit}&offset=${offset}`);

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
    results: results,
  };
}
