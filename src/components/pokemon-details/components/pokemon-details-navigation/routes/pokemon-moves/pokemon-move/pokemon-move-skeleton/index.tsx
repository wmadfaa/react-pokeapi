import React from "react";

export interface PokemonMoveSkeletonProps {}

export const PokemonMoveSkeleton: React.VFC<PokemonMoveSkeletonProps> = () => {
  return (
    <li className="pokemon-move-skeleton">
      <div className="pokemon-move-header-skeleton">
        <div className="pokemon-move-header-title-container-skeleton">
          <div className="pokemon-move-header-title-content-skeleton">
            <p className="pokemon-move-name-skeleton" />
          </div>
        </div>
        <div className="pokemon-move-generation-name-skeleton" />
      </div>
      <div className="pokemon-move-effect-wrapper-skeleton">
        <p className="pokemon-move-effect-skeleton" />
        <p className="pokemon-move-effect-skeleton" />
      </div>
    </li>
  );
};
