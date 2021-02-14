import React from "react";
import classNames from "classnames";

export interface PokemonDetailsTabProps<T> {
  onClick(id: T): void;
  id: T;
  label: string;
  current: boolean;
}

export function PokemonDetailsTab<T>(
  props: PokemonDetailsTabProps<T>
): JSX.Element {
  return (
    <div
      onClick={() => props.onClick(props.id)}
      className={classNames("pokemon-details-tab", {
        default: !props.current,
        current: props.current,
      })}
      aria-current={props.current ? "page" : undefined}
    >
      {props.label}
    </div>
  );
}
