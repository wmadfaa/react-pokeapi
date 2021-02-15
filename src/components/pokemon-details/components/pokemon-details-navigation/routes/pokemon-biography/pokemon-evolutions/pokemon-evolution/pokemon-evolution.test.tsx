import React from "react";
import { render, screen } from "@testing-library/react";

import { PokemonEvolution, PokemonEvolutionProps } from ".";

describe("PokemonEvolution", () => {
  it("render the correct content by type", function () {
    const types: PokemonEvolutionProps["type"][] = [
      "completed",
      "current",
      "upcoming",
    ];
    types.forEach((type) => {
      render(<PokemonEvolution id={1} name="" type={type} />);
      expect(screen.getByTestId(`pokemon-${type}-evolution`)).toBeTruthy();
    });
  });
});
