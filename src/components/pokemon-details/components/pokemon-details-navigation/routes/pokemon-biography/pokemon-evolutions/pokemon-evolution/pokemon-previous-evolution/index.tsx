import React from "react";

export const PokemonCompletedEvolution: React.VFC<{
  id: number;
  name: string;
}> = ({ name }) => {
  return (
    <div
      data-testid="pokemon-completed-evolution"
      className="group flex items-center w-full"
    >
      <span className="px-6 py-4 flex items-center text-sm font-medium">
        <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span className="ml-4 text-sm font-medium text-gray-100">{name}</span>
      </span>
    </div>
  );
};
