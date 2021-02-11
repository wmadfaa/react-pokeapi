import { Ability } from "../../../types/pokeapi";
import React from "react";

export function PokemonAbility(props: { ability: Ability }) {
  return (
    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
      <div className="w-0 flex-1 flex items-center">
        <span className="ml-2 flex-1 w-0 truncate">
          <p className="text-sm font-medium text-gray-900 truncate">
            {props.ability.name}
          </p>
          <p className="text-sm text-gray-500 truncate">
            {props.ability.generation.name}
          </p>
        </span>
      </div>
      <div className="ml-4 flex-shrink-0">
        <button className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
          More
        </button>
      </div>
    </li>
  );
}
