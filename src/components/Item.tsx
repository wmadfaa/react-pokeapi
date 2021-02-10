import React, { useMemo } from "react";
import { find } from "lodash";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { usePokemonQuery } from "../services/usePokemonQuery";
import { usePokemonSpeciesQuery } from "../services/usePokemonSpeciesQuery";
import { PokemonDetailsHeader } from "./pokemon-details-header";
import { Tabs } from "./tabs";
import Portal from "./Portal";
import { PokemonInformation } from "./pokemon-information";

const MotionLink = motion.custom(Link);

export interface ItemProps {
  id: string;
}

export const Item: React.VFC<ItemProps> = ({ id }) => {
  const { data: pokemon } = usePokemonQuery(id);
  const { data: species } = usePokemonSpeciesQuery(id);

  const nativeName = useMemo(() => {
    if (species && species.names) {
      return find(
        species.names,
        (name) => name.language.name.toLocaleLowerCase() === "ja"
      );
    }
  }, [species]);

  return (
    <>
      <MotionLink
        to="/"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="fixed inset-0 transform w-full transition-colors backdrop backdrop-blur-5 bg-black bg-opacity-80"
      />
      <Portal>
        <div className="fixed inset-0 pointer-events-none flex flex-col justify-center lg:px-8 max-w-screen-lg mx-auto px-4 sm:px-6 w-full">
          <motion.div
            id="pokemon-infos"
            className="pointer-events-auto overflow-y-auto flex bg-gray-900 flex-col w-full mx-auto my-4 rounded-lg shadow-lg"
            layoutId={`card-container-${id}`}
            style={{
              maxHeight: 655, //sm 592
            }}
          >
            <PokemonDetailsHeader
              id={id}
              pokemon={pokemon}
              nativeName={nativeName}
            />
            <PokemonInformation />
          </motion.div>
        </div>
      </Portal>
    </>
  );
};
