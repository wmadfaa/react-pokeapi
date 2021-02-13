import React from "react";
import { PokemonDetailsTabs } from "./pokemon-details-tabs";

export function PokemonDetailsNavigation() {
  return (
    <div className="pokemon-details-navigation">
      <PokemonDetailsTabs
        routes={[
          { label: "My Account", to: "/details" },
          { label: "Company", to: "/" },
          { label: "Team Members", to: "/details" },
          { label: "Billing", to: "/details" },
        ]}
      />
    </div>
  );
}
