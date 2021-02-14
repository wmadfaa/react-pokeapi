import { Ability } from "../pokeapi-types";
import { httpClient } from "../http-client";

export async function getPokemonAbility(name: string) {
  const { data } = await httpClient.get<Ability>(`ability/${name}`);
  return data;
}
