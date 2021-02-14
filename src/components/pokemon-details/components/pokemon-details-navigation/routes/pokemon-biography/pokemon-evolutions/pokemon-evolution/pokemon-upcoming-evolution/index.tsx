import React from "react";

export const PokemonUpcomingEvolution: React.VFC<{
  id: number;
  name: string;
}> = ({ id, name }) => {
  return (
    <div className="group flex items-center">
      <span className="px-6 py-4 flex items-center text-sm font-medium">
        <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-700 rounded-full group-hover:border-gray-600">
          <span className="text-gray-500 group-hover:text-gray-100">{id}</span>
        </span>
        <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-100">
          {name}
        </span>
      </span>
    </div>
  );
};
