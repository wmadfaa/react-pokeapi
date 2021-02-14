import React from "react";
import { InView } from "react-intersection-observer";
import { usePokemonQuery } from "services/usePokemonQuery";
import { PokemonMove } from "./pokemon-move";

import "./styles.scss";

export interface PokemonMovesProps {
  pokemonId: string;
}

export const PokemonMoves: React.VFC<PokemonMovesProps> = (props) => {
  const { data } = usePokemonQuery(props.pokemonId);

  if (!data) return null;

  return (
    <ul className="pokemon-moves-list">
      {data.moves.map(({ move }) => (
        <InView key={move.name} triggerOnce>
          {({ ref, inView }) => (
            <PokemonMove name={move.name} inView={inView} ref={ref} />
          )}
        </InView>
      ))}
    </ul>
  );
};
