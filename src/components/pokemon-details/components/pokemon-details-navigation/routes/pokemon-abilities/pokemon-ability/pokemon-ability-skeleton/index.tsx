import React from "react";

export interface PokemonAbilitySkeletonProps {}

export const PokemonAbilitySkeleton: React.VFC<PokemonAbilitySkeletonProps> = () => {
  return (
    <li className="pokemon-ability-skeleton">
      <div className="pokemon-ability-header-skeleton">
        <div className="pokemon-ability-header-title-container-skeleton">
          <div className="pokemon-ability-header-title-content-skeleton">
            <p className="pokemon-ability-name-skeleton" />
          </div>
        </div>
        <div className="pokemon-ability-generation-name-skeleton" />
      </div>
      <div className="pokemon-ability-effect-wrapper-skeleton">
        <p className="pokemon-ability-effect-skeleton" />
        <p className="pokemon-ability-effect-skeleton" />
      </div>
    </li>
  );
};
