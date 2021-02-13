import React from "react";

export interface PokemonDetailsHeaderSkeletonProps {}

export const PokemonDetailsHeaderSkeleton: React.VFC<PokemonDetailsHeaderSkeletonProps> = () => {
  return (
    <div className="pokemon-details-header-skeleton">
      <div className="pokemon-details-header-content-skeleton">
        <div className="pokemon-details-header-title-container-skeleton">
          <div className="pokemon-details-header-subtitle-skeleton" />
          <div className="pokemon-details-header-title-skeleton" />
        </div>
        <div className="pokemon-details-header-body-skeleton">
          <div className="pokemon-details-header-img-skeleton" />
        </div>
      </div>
    </div>
  );
};
