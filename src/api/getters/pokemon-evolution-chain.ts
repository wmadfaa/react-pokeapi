import { httpClient } from "../http-client";
import { EvolutionChain } from "api/pokeapi-types";

export async function getPokemonEvolutionChain(id: string) {
  const { data } = await httpClient.get<EvolutionChain>(
    `evolution-chain/${id}`
  );
  return data;
}
