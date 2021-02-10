import React, { useMemo } from "react";
import { find } from "lodash";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { usePokemonQuery } from "../services/usePokemonQuery";
import { usePokemonSpeciesQuery } from "../services/usePokemonSpeciesQuery";
import { PokemonDetailsHeader } from "./pokemon-details-header";

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="-translate-x-1/2 bg-black bg-opacity-80 fixed inset-y-0 left-1/2 max-w-screen-lg transform w-full transition-colors backdrop backdrop-blur-5"
      />
      <div className="fixed inset-0 max-w-screen-lg w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <Link
          to="/"
          className="text-white font-semibold transform hover:-translate-y-1 transition-transform ease-in duration-150 focus:outline-none"
        >
          Go Back
        </Link>
        <motion.div
          className="flex bg-gray-900 flex-col lg:flex-row justify-center items-start w-full mx-auto my-4 rounded-lg shadow-lg"
          layoutId={`card-container-${id}`}
        >
          <PokemonDetailsHeader
            id={id}
            pokemon={pokemon}
            nativeName={nativeName}
          />
        </motion.div>
      </div>
    </>
  );
};
