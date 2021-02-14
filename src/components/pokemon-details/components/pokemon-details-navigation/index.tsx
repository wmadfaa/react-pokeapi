import React from "react";
import { PokemonDetailsTabs } from "./pokemon-details-tabs";
import { PokemonAbilities } from "./routes/pokemon-abilities";
import { PokemonMoves } from "./routes/pokemon-moves";

export interface PokemonDetailsNavigationProps {
  id: string;
}

export const PokemonDetailsNavigation: React.VFC<PokemonDetailsNavigationProps> = (
  props
) => {
  return (
    <div className="pokemon-details-navigation">
      <PokemonDetailsTabs
        routes={[
          { label: "Abilities", to: "/abilities" },
          { label: "Moves", to: "/" },
          { label: "Team Members", to: "/details" },
          { label: "Billing", to: "/details" },
        ]}
      />
      <div>
        {/*<PokemonAbilities pokemonId={props.id} />*/}
        <PokemonMoves pokemonId={props.id} />
      </div>
    </div>
  );
};
