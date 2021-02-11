import { PokemonMoveDetails } from "../../../types/pokeapi";
import React from "react";

export function PokemonMove(props: { move: PokemonMoveDetails }) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {props.move.name || "unknown"}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {props.move.type.name || "unknown"}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {props.move.accuracy || "unknown"}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {props.move.power || "unknown"}
      </td>
    </tr>
  );
}
