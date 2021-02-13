import React from "react";
import { InView } from "react-intersection-observer";
import { usePokemonQuery } from "services/usePokemonQuery";
import { PokemonAbility } from "./pokemon-ability";

import "./styles.scss";

export interface PokemonAbilitiesProps {
  pokemonId: string;
}

export const PokemonAbilities: React.VFC<PokemonAbilitiesProps> = (props) => {
  const { data } = usePokemonQuery(props.pokemonId);

  if (!data) return null;
  console.log(data);
  return (
    <ul className="pokemon-abilities-list">
      {data.abilities.map(({ ability }) => (
        <InView key={ability.name} triggerOnce>
          {({ ref, inView }) => (
            <PokemonAbility name={ability.name} inView={inView} ref={ref} />
          )}
        </InView>
      ))}
    </ul>
  );
};
