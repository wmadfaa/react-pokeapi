import { pokemonTailwindColors } from "../../../globals";
import React from "react";

export function PokemonType(props: { type: any }) {
  return (
    <li
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${
        pokemonTailwindColors[props.type.name]
      }-100 text-${pokemonTailwindColors[props.type.name]}-800`}
    >
      {props.type.name}
    </li>
  );
}
