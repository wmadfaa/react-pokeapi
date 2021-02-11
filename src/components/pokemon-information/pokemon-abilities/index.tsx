import { Ability } from "../../../types/pokeapi";
import React from "react";

export function PokemonAbilities(props: {
  abilities: Ability[];
  renderItem: (ability: Ability) => JSX.Element;
}) {
  return (
    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500">Abilities</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
          {props.abilities.map(props.renderItem)}
        </ul>
      </dd>
    </div>
  );
}

export { PokemonAbility } from "./pokemon-ability";
