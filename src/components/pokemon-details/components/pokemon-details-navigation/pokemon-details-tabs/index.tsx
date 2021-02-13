import React from "react";
import "./styles.scss";
import {
  PokemonDetailsTab,
  PokemonDetailsTabProps,
} from "./pokemon-details-tab";

export interface PokemonDetailsTabsProps {
  routes: PokemonDetailsTabProps[];
}

export const PokemonDetailsTabs: React.VFC<PokemonDetailsTabsProps> = (
  props
) => {
  return (
    <div>
      <nav className="pokemon-details-tabs" aria-label="Tabs">
        {props.routes.map((routeProps) => (
          <PokemonDetailsTab key={routeProps.label} {...routeProps} />
        ))}
      </nav>
    </div>
  );
};
