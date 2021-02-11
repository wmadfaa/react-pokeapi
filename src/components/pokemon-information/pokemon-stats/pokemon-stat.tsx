import React from "react";

export function PokemonStat(props: { stat: any; baseStat: any; effort: any }) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {props.stat.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {props.baseStat}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {props.effort}
      </td>
    </tr>
  );
}
