import { Type } from "../types/pokeapi";
import { compact, get, map } from "lodash";
import { PokemonTypeColors, PokemonTypePlaceholders } from "../globals";

export function getPokemonImgAttrByTypes(PokemonTypes: Type[]) {
  const matcher = <T extends any>(col: Record<string, T>): T[] =>
    compact(map(PokemonTypes, ({ type }) => get(col, type.name)));

  return {
    colors: matcher(PokemonTypeColors),
    placeholders: matcher(PokemonTypePlaceholders),
  };
}
