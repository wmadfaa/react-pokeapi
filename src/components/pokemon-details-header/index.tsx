import React from "react";
import { PokemonDetailsHeaderSkeleton } from "./skeleton";
import { motion } from "framer-motion";
import { leftPad } from "../../utils/leftPad";
import { PokemonImg } from "../pokemon-interactive-img";
import { Name, Pokemon } from "../../types/pokeapi";

export interface PokemonDetailsHeaderProps {
  id: string;
  pokemon?: Pokemon;
  nativeName?: Name;
}

export const PokemonDetailsHeader: React.VFC<PokemonDetailsHeaderProps> = ({
  id,
  pokemon,
  nativeName,
}) => {
  if (!pokemon || !nativeName) return <PokemonDetailsHeaderSkeleton id={id} />;

  return (
    <motion.div className="pokemon-details-card">
      <motion.div className="pokemon-details-card-content">
        <motion.div className="pokemon-details-card-header">
          <motion.p className="pokemon-details-card-subtitle">
            #{leftPad(pokemon.id, 3)}
          </motion.p>
          <motion.h1 className="pokemon-details-card-title">
            {pokemon.name}
          </motion.h1>
        </motion.div>
        <motion.div className="pokemon-details-card-body">
          <h1 className="pokemon-details-card-native-name">
            {nativeName && nativeName.name}
          </h1>
          <PokemonImg {...pokemon} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
