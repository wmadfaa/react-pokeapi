import { PokemonMoveDetails } from "types/pokeapi";
import { httpClient } from "../http-client";

export async function getPokemonMove(name: string) {
  const { data } = await httpClient.get<PokemonMoveDetails>(`move/${name}`);
  return data;
}
