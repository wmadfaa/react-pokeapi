import { httpClient } from "../http-client";
import { PokemonMoveDetails } from "api/pokeapi-types";

export async function getPokemonMove(name: string) {
  const { data } = await httpClient.get<PokemonMoveDetails>(`move/${name}`);
  return data;
}
