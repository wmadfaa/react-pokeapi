import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

export interface PokemonDetailsTabProps {
  to: string;
  label: string;
  current?: boolean;
}

export const PokemonDetailsTab: React.VFC<PokemonDetailsTabProps> = (props) => {
  return (
    <NavLink
      to={props.to}
      activeClassName="current"
      className={classNames("pokemon-details-tab", {
        default: !props.current,
      })}
      aria-current={props.current ? "page" : undefined}
    >
      {props.label}
    </NavLink>
  );
};
