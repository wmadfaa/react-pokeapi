import React, { useMemo } from "react";
import { getPokemonImgAttrByTypes } from "../utils/components";
import { Pokemon } from "../types/pokeapi";
import ProgressiveImage from "react-progressive-image-loading";

export interface PokemonImgProps {
  pokemon: Pokemon;
  maskSize?: number;
  imgSize?: number;
}

export const PokemonImg: React.VFC<PokemonImgProps> = ({
  pokemon,
  imgSize = 150,
  maskSize = 200,
}) => {
  const imgAttr = useMemo(
    () => (pokemon.types ? getPokemonImgAttrByTypes(pokemon.types) : null),
    [pokemon.types]
  );
  if (!imgAttr /* only for type checking */) return null;

  return (
    <div className="relative mx-auto h-48 w-full">
      <div
        style={{
          width: maskSize,
          height: maskSize,
          backgroundColor: imgAttr.colors[0].light,
        }}
        className="bottom-0 rounded-full absolute inset-x-auto mx-auto z-0 inline-block left-0 right-0"
      />
      <div
        className="absolute m-auto inset-x-0 block cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
        style={{
          width: imgSize,
          height: imgSize,
          bottom: maskSize / 8,
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
