import React, { useMemo } from "react";
import ProgressiveImage from "react-progressive-image-loading";
import { useSpring, animated } from "react-spring";
import { Pokemon } from "../../types/pokeapi";
import { getPokemonImgAttrByTypes } from "../../utils/components";
import styles from "./pokemon-img.module.css";

const calc = (x: number, y: number) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];
const trans1 = (x: number, y: number) =>
  `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans4 = (x: number, y: number) =>
  `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

export const PokemonImg: React.VFC<Pokemon> = (pokemon) => {
  const imgAttr = useMemo(
    () => (pokemon.types ? getPokemonImgAttrByTypes(pokemon.types) : null),
    [pokemon.types]
  );
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 260, friction: 140 },
  }));

  if (!imgAttr /* only for type checking */) return null;

  return (
    <div
      className={styles.container}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        className={styles.card1}
        style={{
          backgroundColor: imgAttr.colors[0].light,
          // @ts-ignore
          transform: props.xy.interpolate(trans1),
        }}
      />
      <ProgressiveImage
        preview={imgAttr.placeholders[0]}
        src={pokemon.sprites.front_default}
        transitionTime={500}
        render={(src, style) => (
          <animated.img
            src={src}
            className={styles.card4}
            // @ts-ignore
            style={{ ...style, transform: props.xy.interpolate(trans4) }}
          />
        )}
      />
    </div>
  );
};
