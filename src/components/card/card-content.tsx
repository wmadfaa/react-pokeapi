import React, { useEffect } from "react";
import { leftPad } from "../../utils/leftPad";
import { usePokemonQuery } from "../../services/usePokemonQuery";
import { motion } from "framer-motion";
import { PokemonImg } from "../pokemon-img";

export interface CardContentProps {
  id: string;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CardContent: React.VFC<CardContentProps> = ({
  id,
  setIsLoading,
}) => {
  const { data, isLoading } = usePokemonQuery(id);

  useEffect(() => {
    if (data && !isLoading) {
      setIsLoading(false);
    }
  }, [data, id, isLoading, setIsLoading]);

  if (!data) return null;

  return (
    <motion.div className="card-content" layoutId={`card-container-${id}`}>
      <motion.div className="card-header" layoutId={`title-container-${id}`}>
        <p className="text-md mt-4 text-white font-medium">
          #{leftPad(data.id, 3)}
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold pb-6 capitalize">
          {data.name}
        </h1>
      </motion.div>

      <motion.div className="card-body" layoutId={`card-image-container-${id}`}>
        <PokemonImg pokemon={data} />
      </motion.div>
    </motion.div>
  );
};
