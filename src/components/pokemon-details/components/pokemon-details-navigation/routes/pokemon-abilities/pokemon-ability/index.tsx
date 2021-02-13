import React, { forwardRef, useState } from "react";
import { PokemonAbilityContent } from "./pokemon-ability-content";
import { PokemonAbilitySkeleton } from "./pokemon-ability-skeleton";

import "./styles.scss";

export interface PokemonAbilityProps {
  name: string;
  inView: boolean;
}

export const PokemonAbility = forwardRef<HTMLDivElement, PokemonAbilityProps>(
  (props, ref) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
      <div ref={ref}>
        {props.inView && (
          <PokemonAbilityContent
            name={props.name}
            setIsLoading={setIsLoading}
          />
        )}
        {isLoading && <PokemonAbilitySkeleton />}
      </div>
    );
  }
);
PokemonAbility.displayName = "PokemonAbility";
