import React from "react";

export const PokemonCurrentEvolution: React.VFC<{
  id: number;
  name: string;
}> = ({ id, name }) => {
  return (
    <div
      data-testid="pokemon-current-evolution"
      className="px-6 py-4 flex items-center text-sm font-medium"
    >
      <span
        className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full"
        aria-current="step"
      >
        <span className="text-indigo-400">{id}</span>
      </span>
      <span className="ml-4 text-sm font-medium text-indigo-600">{name}</span>
    </div>
  );
};
