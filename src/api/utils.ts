import { compact } from "lodash";
import { leftPad } from "utils/leftPad";
import { isNumeric } from "utils/type-guards";
import { HQ_SPRITES_URL } from "./constants";

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

export function extractIdFromUrl(url: string): string {
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
  return transformSpriteToBaseImage(Number(id), HQ_SPRITES_URL);
}
