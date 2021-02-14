import React from "react";
import { PokemonDetailsTabs } from "./pokemon-details-tabs";
import { PokemonBiography } from "./routes/pokemon-biography";

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
          { label: "biography", to: "/" },
          { label: "Abilities", to: "/abilities" },
          { label: "Moves", to: "/moves" },
          { label: "Billing", to: "/details" },
        ]}
      />
      <div>
        {/*<PokemonAbilities pokemonId={props.id} />*/}
        {/*<PokemonMoves pokemonId={props.id} />*/}
        <PokemonBiography pokemonId={props.id} />
      </div>
    </div>
  );
};
