import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image-loading";
import { Type } from "api";
import { getPokemonColorsByTypes } from "utils/components";

const IMG_SIZE = 150;
const MASK_SIZE = 200;

export interface PokemonImgProps {
  id: string;
  preview: string;
  src: string;
  name: string;
  types: Type[];
}

export const PokemonImg: React.VFC<PokemonImgProps> = (props) => {
  const [{ light: backgroundColor }] = useMemo(
    () => getPokemonColorsByTypes(props.types),
    [props.types]
  );

  return (
    <motion.div className="pokemon-img" layoutId={`pokemon-img-${props.id}`}>
      <div
        className="pokemon-img-mask"
        style={{
          width: MASK_SIZE,
          height: MASK_SIZE,
          backgroundColor,
        }}
      />
      <div
        className="pokemon-img-wrapper"
        style={{
          width: IMG_SIZE,
          height: IMG_SIZE,
          bottom: MASK_SIZE / 8,
        }}
      >
        <ProgressiveImage
          preview={props.preview}
          src={props.src}
          transitionTime={500}
          render={(src, style) => (
            <img src={src} style={style} alt={props.name} />
          )}
        />
      </div>
    </motion.div>
  );
};
