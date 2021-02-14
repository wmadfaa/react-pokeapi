import { httpClient } from "../http-client";
import { PokemonSpecies } from "../pokeapi-types";

export async function getPokemonSpecies(id: string) {
  const { data } = await httpClient.get<PokemonSpecies>(
    `pokemon-species/${id}`
  );
  return data;
}
