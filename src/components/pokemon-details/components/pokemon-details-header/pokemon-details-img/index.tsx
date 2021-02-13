import React, { useMemo } from "react";
import ProgressiveImage from "react-progressive-image-loading";
import { useSpring, animated } from "react-spring";
import { Type } from "types/pokeapi";
import { getPokemonImgAttrByTypes } from "utils/components";

const calc = (x: number, y: number) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];
const mask_trans = (x: number, y: number) =>
  `translate3d(${x / 10}px,${y / 10}px,0)`;
const img_trans = (x: number, y: number) =>
  `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

export interface PokemonDetailsImgProps {
  id: string;
  src: string;
  name: string;
  types: Type[];
}

export const PokemonDetailsImg: React.VFC<PokemonDetailsImgProps> = (props) => {
  const { colors, placeholders } = useMemo(
    () => getPokemonImgAttrByTypes(props.types),
    [props.types]
  );

  const [springProps, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 260, friction: 140 },
  }));

  return (
    <div
      className="pokemon-details-img"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        className="pokemon-details-img-mask"
        style={{
          backgroundColor: colors[0].light,
          // @ts-ignore
          transform: springProps.xy.interpolate(mask_trans),
        }}
      />
      <ProgressiveImage
        preview={placeholders[0]}
        src={props.src}
        transitionTime={500}
        render={(src, style) => (
          <animated.img
            src={src}
            alt={props.name}
            className="pokemon-details-img-wrapper"
            style={{
              ...style,
              // @ts-ignore
              transform: springProps.xy.interpolate(img_trans),
            }}
          />
        )}
      />
    </div>
  );
};
