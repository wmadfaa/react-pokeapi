import React from "react";
import { motion } from "framer-motion";
import Portal from "../Portal";
import { PokemonDetailsHeader } from "./components/pokemon-details-header";
import { PokemonDetailsOverlay } from "./components/pokemon-details-overlay";
import { PokemonDetailsNavigation } from "./components/pokemon-details-navigation";

import "./styles.scss";

export interface PokemonDetailsProps {
  id: string;
}

export const PokemonDetails: React.VFC<PokemonDetailsProps> = (props) => {
  return (
    <>
      <PokemonDetailsOverlay />
      <Portal>
        <div className="pokemon-details">
          <motion.div
            className="pokemon-details-content"
            layoutId={`pokemon-card-content-${props.id}`}
          >
            <PokemonDetailsHeader id={props.id} />
            <PokemonDetailsNavigation id={props.id} />
          </motion.div>
        </div>
      </Portal>
    </>
  );
};
