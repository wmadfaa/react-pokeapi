import React, { useCallback } from "react";
import { findIndex } from "lodash";

import { PokemonEvolution } from "./pokemon-evolution";
import { usePokemonEvolutions } from "../../../../../hooks/usePokemonEvolutions";
import { Pokemon } from "api";

export interface PokemonEvolutionsProps {
  id: string;
}

export const PokemonEvolutions: React.VFC<PokemonEvolutionsProps> = (props) => {
  const { data: evolutions } = usePokemonEvolutions(props.id);

  const getTypeByIndex = useCallback(
    (index: number, pokemons: Pokemon[]) => {
      const currentIndex = findIndex(pokemons, { id: Number(props.id) });
      if (index < currentIndex) {
        return "completed";
      } else if (index === currentIndex) {
        return "current";
      }
      return "upcoming";
    },
    [props.id]
  );

  if (!evolutions) return null;

  return (
    <nav aria-label="Progress">
      <ol className="bg-trueGray-800 border border-gray-300 rounded-md divide-y divide-gray-300">
        {evolutions.map(({ id, name }, index) => (
          <PokemonEvolution
            id={id}
            name={name}
            type={getTypeByIndex(index, evolutions)}
            isLastPokemonEvolution={index === evolutions.length - 1}
          />
        ))}
      </ol>
    </nav>
  );
};
