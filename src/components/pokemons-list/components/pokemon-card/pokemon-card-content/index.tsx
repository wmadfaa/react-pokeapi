import React, { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { leftPad } from "utils/leftPad";
import { usePokemonQuery } from "services/usePokemonQuery";
import { PokemonImg } from "../pokemon-img";

export interface PokemonCardContentProps {
  id: string;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PokemonCardContent: React.VFC<PokemonCardContentProps> = (
  props
) => {
  const { data, isLoading } = usePokemonQuery(props.id);
  const subtitle = useMemo(() => leftPad(props.id, 3), [props.id]);

  useEffect(() => {
    if (data && !isLoading) props.setIsLoading(false);
    else props.setIsLoading(true);
  }, [isLoading, data, props]);

  if (!data) return null;

  return (
    <motion.div
      className="pokemon-card-content"
      layoutId={`pokemon-card-content-${props.id}`}
    >
      <motion.div
        className="pokemon-card-header"
        layoutId={`pokemon-card-header-${props.id}`}
      >
        <motion.p
          className="pokemon-card-subtitle"
          layoutId={`pokemon-card-subtitle-${props.id}`}
        >
          #{subtitle}
        </motion.p>
        <motion.h1
          className="pokemon-card-title"
          layoutId={`pokemon-card-title-${props.id}`}
        >
          {data.name}
        </motion.h1>
      </motion.div>
      <motion.div
        className="pokemon-card-body"
        layoutId={`pokemon-card-body-${props.id}`}
      >
        <PokemonImg
          id={props.id}
          preview={data.sprites.front_default}
          src={data.sprites.hq_front_default}
          name={data.name}
          types={data.types}
        />
      </motion.div>
    </motion.div>
  );
};
