import React from "react";
import { PokemonDetailsHeaderSkeleton } from "./skeleton";
import { motion } from "framer-motion";
import { leftPad } from "../../utils/leftPad";
import { PokemonImg } from "../pokemon-img";
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
    <motion.div
      id="pokemon-img"
      className="flex flex-col lg:flex-row justify-center items-start w-full mx-auto rounded-lg shadow-lg"
    >
      <motion.div className="w-full">
        <motion.div
          className="px-4 md:px-8 h-24"
          layoutId={`title-container-${id}`}
        >
          <p className="text-md mt-4 text-white font-medium">
            #{leftPad(pokemon.id, 3)}
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold pb-6 capitalize">
            {pokemon.name}
          </h1>
        </motion.div>
        <motion.div
          className="relative text-center mx-auto w-full h-96 mt-8 lg:mt-24"
          layoutId={`card-image-container-${id}`}
        >
          <h1 className="absolute -mt-2 text-6xl z-0 w-full text-white opacity-50 font-extrabold overflow-hidden">
            {nativeName && nativeName.name}
          </h1>
          <PokemonImg {...pokemon} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
