import axios from "axios";
import deepmerge from "deepmerge";
import {
  EvolutionChain,
  Pokemon,
  PokemonsList,
  PokemonSpecies,
} from "../types/pokeapi";
import {
  extractPokemonIdFromUrl,
  extractSearchParams,
  getPokemonImageUrl,
} from "../utils/api";

const BASE_URL = "https://pokeapi.co/api/v2/";

export const api = axios.create({
  baseURL: BASE_URL,
});

export async function getPokemon(id: string): Promise<Pokemon> {
  const { data } = await api.get<Pokemon>(`pokemon/${id}`);

  const pokemonImageUrl = getPokemonImageUrl(data.id);

  const transformedPokemon: Partial<Pokemon> = {
    sprites: { ...data.sprites, front_default: pokemonImageUrl },
  };

  return deepmerge<Pokemon>(data, transformedPokemon);
}

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
  } = await api.get<PokemonsList>(`pokemon?limit=${limit}&offset=${offset}`);

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
      id: extractPokemonIdFromUrl(url),
    })),
  };
}

export async function getPokemonSpecies(id: string) {
  const { data } = await api.get<PokemonSpecies>(`pokemon-species/${id}`);
  await new Promise((r) => setTimeout(r, 1000));
  return data;
}

export async function getEvolutionChain(id: string) {
  const { data } = await api.get<EvolutionChain>(`evolution-chain/${id}`);
  await new Promise((r) => setTimeout(r, 1000));
  return data;
}
