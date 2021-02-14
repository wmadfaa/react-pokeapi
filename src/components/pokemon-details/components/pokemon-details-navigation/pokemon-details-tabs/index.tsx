import React from "react";
import "./styles.scss";
import {
  PokemonDetailsTab,
  PokemonDetailsTabProps,
} from "./pokemon-details-tab";

export interface PokemonDetailsTabsProps<T> {
  onChange(id: T): void;
  currentId: T;
  pages: Omit<PokemonDetailsTabProps<T>, "onClick" | "current">[];
}

export function PokemonDetailsTabs<T>({
  onChange,
  pages,
  currentId,
}: PokemonDetailsTabsProps<T>): JSX.Element {
  return (
    <div className="bg-gray-900 py-6 sticky top-0 z-10">
      <nav className="pokemon-details-tabs" aria-label="Tabs">
        {pages.map((page, index) => (
          <PokemonDetailsTab
            current={currentId === page.id}
            key={page.label}
            onClick={onChange}
            {...page}
          />
        ))}
      </nav>
    </div>
  );
}
