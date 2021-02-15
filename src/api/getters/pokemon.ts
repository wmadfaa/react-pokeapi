import deepmerge from "deepmerge";
import { getPokemonImageUrl } from "../utils";
import { BASE_SPRITES_URL } from "../../constants/api";
import { httpClient } from "../http-client";
import { Pokemon } from "../pokeapi-types";

export async function getPokemon(id: string): Promise<Pokemon> {
  const { data } = await httpClient.get<Pokemon>(`pokemon/${id}`);
  const hq_front_default = getPokemonImageUrl(data.id);
  const front_default = `${BASE_SPRITES_URL}${id}`;
  const transformedPokemon: Partial<Pokemon> = {
    sprites: { ...data.sprites, hq_front_default, front_default },
  };
  return deepmerge<Pokemon>(data, transformedPokemon);
}
