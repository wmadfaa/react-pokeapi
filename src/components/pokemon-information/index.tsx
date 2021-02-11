import React from "react";
import { usePokemonQuery } from "../../services/usePokemonQuery";
import { usePokemonMoveDetails } from "../../services/usePokemonMoveDetails";
import { usePokemonAbilitiesQuery } from "../../services/usePokemonAbilitiesQuery";
import { useEvolutionChainQuery } from "../../services/useEvolutionChainQuery";
import { PokemonEvolutions } from "./pokemon-evolutions";
import { PokemonAbilities, PokemonAbility } from "./pokemon-abilities";
import { PokemonMove, PokemonMoves } from "./pokemon-moves";
import { PokemonStat, PokemonStats } from "./pokemon-stats";
import { PokemonType, PokemonTypes } from "./pokemon-types";

export interface PokemonInformationProps {
  id: string;
}

export const PokemonInformation: React.VFC<PokemonInformationProps> = ({
  id,
}) => {
  const { data: pokemon } = usePokemonQuery(id);
  const { data: moves } = usePokemonMoveDetails(id);
  const { data: abilities } = usePokemonAbilitiesQuery(id);
  const { data: evolutionChain } = useEvolutionChainQuery(id);
  if (!pokemon || !moves || !abilities || !evolutionChain) return null;

  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Pokemon Information
        </h3>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Order number</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {pokemon.order}
            </dd>
          </div>

          <PokemonTypes
            pokemon={pokemon}
            renderItem={({ type }) => <PokemonType type={type} />}
          />

          <PokemonStats
            pokemon={pokemon}
            renderItem={({ stat, base_stat, effort }) => (
              <PokemonStat stat={stat} baseStat={base_stat} effort={effort} />
            )}
          />

          <PokemonMoves
            pokemonMoveDetails={moves}
            renderItem={(move) => <PokemonMove move={move} />}
          />

          <PokemonAbilities
            abilities={abilities}
            renderItem={(ability) => <PokemonAbility ability={ability} />}
          />

          <PokemonEvolutions
            pokemon={pokemon}
            evolutionChain={evolutionChain}
          />
        </dl>
      </div>
    </div>
  );
};
