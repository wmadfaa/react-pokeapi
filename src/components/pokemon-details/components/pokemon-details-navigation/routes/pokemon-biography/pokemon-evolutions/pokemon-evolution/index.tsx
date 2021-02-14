import React, { useMemo } from "react";
import { PokemonUpcomingEvolution } from "./pokemon-upcoming-evolution";
import { PokemonCurrentEvolution } from "./pokemon-current-evolution";
import { PokemonPreviousEvolution } from "./pokemon-previous-evolution";

export interface PokemonEvolutionProps {
  id: number;
  name: string;
  type: "completed" | "current" | "upcoming";
  isLastPokemonEvolution: boolean;
}

export const PokemonEvolution: React.FC<PokemonEvolutionProps> = ({
  type,
  isLastPokemonEvolution,
  ...stepProps
}) => {
  const content = useMemo(() => {
    switch (type) {
      case "completed":
        return <PokemonPreviousEvolution {...stepProps} />;
      case "current":
        return <PokemonCurrentEvolution {...stepProps} />;
      case "upcoming":
        return <PokemonUpcomingEvolution {...stepProps} />;
    }
  }, [stepProps, type]);

  return <li className="relative">{content}</li>;
};
