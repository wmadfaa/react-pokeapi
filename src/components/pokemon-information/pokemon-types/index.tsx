import { Pokemon } from "../../../types/pokeapi";
import React from "react";

export function PokemonTypes(props: {
  pokemon: Pokemon;
  renderItem: ({ type }: { type: any }) => JSX.Element;
}) {
  return (
    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500">Types</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        <ul className="flex space-y-0 flex-row space-x-4">
          {props.pokemon.types.map(props.renderItem)}
        </ul>
      </dd>
    </div>
  );
}
export { PokemonType } from "./pokemon-type";
