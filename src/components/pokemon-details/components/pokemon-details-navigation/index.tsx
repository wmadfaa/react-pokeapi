import React, { useMemo, useState } from "react";
import { PokemonDetailsTabs } from "./pokemon-details-tabs";
import { PokemonStats } from "./routes/pokemon-stats";
import { motion, AnimatePresence } from "framer-motion";
import { PokemonBiography } from "./routes/pokemon-biography";
import { PokemonMoves } from "./routes/pokemon-moves";
import { PokemonAbilities } from "./routes/pokemon-abilities";

enum Pages {
  POKEMON_BIOGRAPHY,
  POKEMON_STATS,
  POKEMON_ABILITIES,
  POKEMON_MOVES,
}

export interface PokemonDetailsNavigationProps {
  id: string;
}

const variants = {
  enter: (direction: number) => {
    return {
      //x: direction > 0 ? 360 : -360,
      opacity: 0,
    };
  },
  center: {
    //zIndex: 1,
    //x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      //zIndex: 0,
      //x: direction < 0 ? 360 : -360,
      opacity: 0,
    };
  },
};

export const PokemonDetailsNavigation: React.VFC<PokemonDetailsNavigationProps> = (
  props
) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const handlePageChange = (next: number) => {
    setPage([next, page > next ? 0 : 1]);
  };

  const currentPage = useMemo(() => {
    switch (page) {
      case 0:
        return <PokemonBiography pokemonId={props.id} />;
      case 1:
        return <PokemonStats pokemonId={props.id} />;
      case 2:
        return <PokemonAbilities pokemonId={props.id} />;
      case 3:
        return <PokemonMoves pokemonId={props.id} />;
    }
  }, [page, props.id]);

  return (
    <div className="pokemon-details-navigation">
      <PokemonDetailsTabs
        currentId={page}
        onChange={handlePageChange}
        pages={[
          { label: "biography", id: Pages.POKEMON_BIOGRAPHY },
          { label: "Stats", id: Pages.POKEMON_STATS },
          { label: "Abilities", id: Pages.POKEMON_ABILITIES },
          { label: "Moves", id: Pages.POKEMON_MOVES },
        ]}
      />
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          {currentPage}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
