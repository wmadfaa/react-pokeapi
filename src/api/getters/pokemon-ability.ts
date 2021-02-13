import { Ability } from "types/pokeapi";
import { httpClient } from "../http-client";

export async function getPokemonAbility(name: string) {
  const { data } = await httpClient.get<Ability>(`ability/${name}`);
  return data;
}
