import { Type } from "api";
import { compact, get, map } from "lodash";
import { POKEMON_TYPE_COLORS } from "../../globals";

export function getPokemonColorsByTypes(PokemonTypes: Type[]) {
  const matcher = <T extends any>(col: Record<string, T>): T[] =>
    compact(map(PokemonTypes, ({ type }) => get(col, type.name)));

  return matcher(POKEMON_TYPE_COLORS);
}
