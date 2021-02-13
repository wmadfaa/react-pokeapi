import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion.custom(Link);

export const PokemonDetailsOverlay: React.VFC = () => {
  return (
    <MotionLink
      to="/"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.2, delay: 0.15 }}
      style={{ pointerEvents: "auto" }}
      className="pokemon-details-overlay"
    />
  );
};
