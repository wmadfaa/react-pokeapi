import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { findIndex } from "lodash";
import { Pokemon } from "../../../types/pokeapi";
import { leftPad } from "../../../utils/leftPad";

interface StepProps {
  id: number;
  name: string;
}

const CompletedStep: React.VFC<StepProps> = ({ id, name }) => {
  return (
    <Link to={`/${id}`} className="group flex items-center w-full">
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
        <span className="ml-4 text-sm font-medium text-gray-900">{name}</span>
      </span>
    </Link>
  );
};

const CurrentStep: React.VFC<StepProps> = ({ id, name }) => {
  return (
    <Link
      to={`/${id}`}
      className="px-6 py-4 flex items-center text-sm font-medium"
    >
      <span
        className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full"
        aria-current="step"
      >
        <span className="text-indigo-600">{leftPad(id, 3)}</span>
      </span>
      <span className="ml-4 text-sm font-medium text-indigo-600">{name}</span>
    </Link>
  );
};

const UpcomingStep: React.VFC<StepProps> = ({ id, name }) => {
  return (
    <Link to={`/${id}`} className="group flex items-center">
      <span className="px-6 py-4 flex items-center text-sm font-medium">
        <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
          <span className="text-gray-500 group-hover:text-gray-900">
            {leftPad(id, 3)}
          </span>
        </span>
        <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">
          {name}
        </span>
      </span>
    </Link>
  );
};

function NextArrow() {
  return (
    <div
      className="hidden md:block absolute top-0 right-0 h-full w-5"
      aria-hidden="true"
    >
      <svg
        className="h-full w-full text-gray-300"
        viewBox="0 0 22 80"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 -2L20 40L0 82"
          vectorEffect="non-scaling-stroke"
          stroke="currentcolor"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export interface PokemonEvolutionsProps {
  pokemon: Pokemon;
  evolutionChain: Pokemon[];
}

export const PokemonEvolutions: React.VFC<PokemonEvolutionsProps> = ({
  evolutionChain,
  pokemon,
}) => {
  const selectedPokemonOrderFromEvolutionChain = useMemo(() => {
    return findIndex(evolutionChain, { id: pokemon.id });
  }, [evolutionChain, pokemon.id]);

  return (
    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500">Evolutions</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        <nav aria-label="Progress">
          <ol className="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0">
            {evolutionChain.map(({ id, name }, index) => {
              return (
                <li className="relative md:flex-1 md:flex">
                  {selectedPokemonOrderFromEvolutionChain > index ? (
                    <CompletedStep id={id} name={name} />
                  ) : selectedPokemonOrderFromEvolutionChain === index ? (
                    <CurrentStep id={id} name={name} />
                  ) : (
                    <UpcomingStep id={id} name={name} />
                  )}
                  {index < evolutionChain.length - 1 && <NextArrow />}
                </li>
              );
            })}
          </ol>
        </nav>
      </dd>
    </div>
  );
};
