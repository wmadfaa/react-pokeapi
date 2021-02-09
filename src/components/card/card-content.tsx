import React, { useEffect } from "react";
import ProgressiveImage from "react-progressive-image-loading";
import { PokemonTypeColors, PokemonTypePlaceholders } from "../../globals";
import { leftPad } from "../../utils/leftPad";
import { usePokemonQuery } from "../../services/usePokemonQuery";
import { motion } from "framer-motion";

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

  if (!data || isLoading) return null;

  const backgroundColors = data.types.map(({ type }) => {
    const [[, backgroundColor]] = Object.entries(PokemonTypeColors).filter(
      ([key, _]) => key === type.name
    );

    return backgroundColor;
  });

  const imagePlaceholder = data.types.map(({ type }) => {
    const [[, image]] = Object.entries(PokemonTypePlaceholders).filter(
      ([key, _]) => key === type.name
    );

    return image;
  });

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
        <div
          className="flex-shrink-0 mx-auto rounded-full"
          style={{ backgroundColor: backgroundColors[0].light }}
        >
          <ProgressiveImage
            preview={imagePlaceholder[0]}
            src={data.sprites.front_default}
            render={(src, style) => (
              <img
                src={src}
                alt={data.name}
                style={style}
                className="-translate-x-1.5 -translate-y-1.5 h-32 scale-125 transform w-32"
              />
            )}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
