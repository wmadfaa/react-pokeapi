import React, { useMemo } from "react";
import { find } from "lodash";
import { motion } from "framer-motion";
import { leftPad } from "utils/leftPad";
import { usePokemonQuery } from "services/usePokemonQuery";
import { usePokemonSpeciesQuery } from "services/usePokemonSpeciesQuery";
import { PokemonDetailsImg } from "./pokemon-details-img";
import { PokemonDetailsHeaderSkeleton } from "./pokemon-details-header-skeleton";

export interface PokemonDetailsHeaderProps {
  id: string;
}

export const PokemonDetailsHeader: React.VFC<PokemonDetailsHeaderProps> = (
  props
) => {
  const { data: pokemon } = usePokemonQuery(props.id);
  const { data: species } = usePokemonSpeciesQuery(props.id);

  const nativeName = useMemo(() => {
    if (species && species.names) {
      return find(
        species.names,
        (name) => name.language.name.toLocaleLowerCase() === "ja"
      );
    }
  }, [species]);

  if (!pokemon || !nativeName) return <PokemonDetailsHeaderSkeleton />;

  return (
    <div className="pokemon-details-header">
      <div className="pokemon-details-header-content">
        <motion.div
          className="pokemon-details-header-title-container"
          layoutId={`pokemon-card-header-${props.id}`}
        >
          <motion.p
            className="pokemon-details-header-subtitle"
            layoutId={`pokemon-card-subtitle-${props.id}`}
          >
            #{leftPad(props.id, 3)}
          </motion.p>
          <motion.h1
            className="pokemon-details-header-title"
            layoutId={`pokemon-card-title-${props.id}`}
          >
            {pokemon.name}
          </motion.h1>
        </motion.div>
        <motion.div
          className="pokemon-details-header-body"
          layoutId={`pokemon-card-body-${props.id}`}
        >
          <motion.h1 className="pokemon-details-header-native-name">
            {nativeName.name}
          </motion.h1>
          <PokemonDetailsImg
            id={props.id}
            name={pokemon.name}
            types={pokemon.types}
            src={pokemon.sprites.front_default}
          />
        </motion.div>
      </div>
    </div>
  );
};
