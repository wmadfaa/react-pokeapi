import { leftPad } from "./leftPad";
import { compact } from "lodash";
import { isNumeric } from "./type-guards";
import { Chain } from "../types/pokeapi";

const BASE_IMAGE_URL =
  "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/";

export const extractSearchParams = <T extends object>(
  url: string,
  match: (obj: any) => boolean
): T => {
  const _url = new URL(url);
  function isType(type: object): type is T {
    return match(type);
  }

  const obj = Object.fromEntries(_url.searchParams);
  if (isType(obj)) {
    return obj;
  }
  throw new Error(`the passed url ${url} doesn't match the selected type`);
};
export const transformSpriteToBaseImage = (
  pokemonId: number,
  baseUrl: string
): string => {
  return baseUrl + leftPad(pokemonId, 3) + ".png";
};

export function extractPokemonIdFromUrl(url: string): string {
  const _url = new URL(url);
  const id = compact(_url.pathname.split("/")).pop();
  if (isNumeric(id)) {
    return id;
  }
  throw new Error(
    `the passed url ${url} doesn't has a valid numeric ID at  its end`
  );
}

export function getPokemonImageUrl(id: string | number) {
  return transformSpriteToBaseImage(Number(id), BASE_IMAGE_URL);
}

export function extractPokemonEvolutions(chain: Chain) {
  const flatten = (data: Chain, prev: string[] = []): string[] => {
    if (data.evolves_to.length) {
      return flatten(data.evolves_to[0], [...prev, data.species.name]);
    }
    return [...prev, data.species.name];
  };
  return flatten(chain);
}
