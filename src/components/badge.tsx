import React from "react";
import { POKEMON_TAILWIND_COLORS } from "../globals";

export interface BadgeProps {
  type: string;
  label: string;
}

export const Badge: React.VFC<BadgeProps> = ({ label, type }) => {
  const color = POKEMON_TAILWIND_COLORS[type];
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${color}-100 text-${color}-800`}
    >
      {label}
    </span>
  );
};
