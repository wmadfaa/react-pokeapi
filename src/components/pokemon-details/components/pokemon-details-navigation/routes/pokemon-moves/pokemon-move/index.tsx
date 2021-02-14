import React, { forwardRef, useState } from "react";
import { PokemonMoveContent } from "./pokemon-move-content";
import { PokemonMoveSkeleton } from "./pokemon-move-skeleton";

export interface PokemonMoveProps {
  name: string;
  inView: boolean;
}

export const PokemonMove = forwardRef<HTMLDivElement, PokemonMoveProps>(
  (props, ref) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
      <div ref={ref}>
        {props.inView && (
          <PokemonMoveContent name={props.name} setIsLoading={setIsLoading} />
        )}
        {isLoading && <PokemonMoveSkeleton />}
      </div>
    );
  }
);
PokemonMove.displayName = "PokemonMove";
