import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { usePokemonQuery } from "../services/usePokemonQuery";
import { leftPad } from "../utils/leftPad";
import ProgressiveImage from "react-progressive-image-loading";
import { PokemonTypeColors, PokemonTypePlaceholders } from "../globals";

export interface ItemProps {
  id: string;
}

const AnimatedLink = motion.custom(Link);

export const Item: React.VFC<ItemProps> = ({ id }) => {
  const { data } = usePokemonQuery(id);

  if (!data) return null;

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
    <>
      <AnimatedLink
        to="/"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="-translate-x-1/2 bg-black bg-opacity-80 fixed inset-y-0 left-1/2 max-w-screen-lg transform w-full transition-colors backdrop backdrop-blur-5"
      />
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
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
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">#{leftPad(data.id, 3)}</span>
            <h2>{data.name}</h2>
          </motion.div>
          <motion.div className="content-container" animate>
            {}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
