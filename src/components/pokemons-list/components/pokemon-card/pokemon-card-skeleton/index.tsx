import React from "react";

export interface PokemonCardSkeletonProps {}

export const PokemonCardSkeleton: React.VFC<PokemonCardSkeletonProps> = () => {
  return (
    <div className="pokemon-card-content-skeleton">
      <div className="pokemon-card-header-skeleton">
        <div className="pokemon-card-subtitle-skeleton" />
        <div className="pokemon-card-title-skeleton" />
      </div>
      <div className="pokemon-card-body-skeleton">
        <div className="pokemon-img-skeleton" />
      </div>
    </div>
  );
};
