import React, { useMemo } from "react";
import { getPokemonImgAttrByTypes } from "../utils/components";
import { Pokemon } from "../types/pokeapi";
import ProgressiveImage from "react-progressive-image-loading";

const MaskSize = 200;
const ImageSize = 150;

const MaskStyling = {
  width: MaskSize,
  height: MaskSize,
  bottom: 0,
};

const ImageContainerStyling = {
  width: ImageSize,
  height: ImageSize,
  display: "block",
  left: 0,
  right: 0,
  bottom: 25,
  margin: "auto",
};

export const PokemonImg: React.VFC<Pokemon> = (pokemon) => {
  const imgAttr = useMemo(
    () => (pokemon.types ? getPokemonImgAttrByTypes(pokemon.types) : null),
    [pokemon.types]
  );
  if (!imgAttr /* only for type checking */) return null;

  return (
    <div className="relative mx-auto h-48 w-full">
      <div
        style={{
          ...MaskStyling,
          backgroundColor: imgAttr.colors[0].light,
        }}
        className="rounded-full absolute inset-x-auto mx-auto z-0 inline-block left-0 right-0"
      />
      <div
        className="cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
        style={{
          ...ImageContainerStyling,
          position: "absolute",
        }}
      >
        <ProgressiveImage
          preview={imgAttr.placeholders[0]}
          src={pokemon.sprites.front_default}
          transitionTime={500}
          render={(src, style) => (
            <img src={src} style={style} alt={pokemon.name} />
          )}
        />
      </div>
    </div>
  );
};
