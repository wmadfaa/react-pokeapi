import React, { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import { PokemonCardContent } from "./pokemon-card-content";
import { PokemonCardSkeleton } from "./pokemon-card-skeleton";

export interface PokemonCardProps {
  id: string;
  inView: boolean;
}

export const PokemonCard = forwardRef<HTMLDivElement, PokemonCardProps>(
  (props, ref) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
      <div className="pokemon-card" ref={ref}>
        {props.inView && (
          <Link to={props.id}>
            <PokemonCardContent id={props.id} setIsLoading={setIsLoading} />
          </Link>
        )}
        {isLoading && <PokemonCardSkeleton />}
      </div>
    );
  }
);
PokemonCard.displayName = "PokemonCard";
