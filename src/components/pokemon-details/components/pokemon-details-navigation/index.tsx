import React from "react";
import { PokemonDetailsTabs } from "./pokemon-details-tabs";
import { PokemonStats } from "./routes/pokemon-stats";

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
          { label: "biography", to: "/biography" },
          { label: "Stats", to: "/" },
          { label: "Abilities", to: "/abilities" },
          { label: "Moves", to: "/moves" },
        ]}
      />
      <div>
        {/*<PokemonAbilities pokemonId={props.id} />*/}
        {/*<PokemonMoves pokemonId={props.id} />*/}
        {/*<PokemonBiography pokemonId={props.id} />*/}
        <PokemonStats pokemonId={props.id} />
      </div>
    </div>
  );
};
