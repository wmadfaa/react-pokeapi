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
    <motion.div
      className="w-full h-full bg-gray-900 rounded-xl overflow-hidden flex flex-col justify-center items-center"
      layoutId={`card-container-${id}`}
    >
      <motion.div
        className="w-full flex-grow-0 px-4 md:px-8"
        layoutId={`title-container-${id}`}
      >
        <p className="text-md mt-4 text-white font-medium">
          #{leftPad(data.id, 3)}
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold pb-6 capitalize">
          {data.name}
        </h1>
      </motion.div>

      <motion.div
        className="flex-grow w-full flex items-center justify-center"
        layoutId={`card-image-container-${id}`}
      >
        <PokemonImg pokemon={data} />
      </motion.div>
    </motion.div>
  );
};
