import { getPokemonColorsByTypes } from ".";
import { POKEMON_TYPE_COLORS } from "../../globals";

const mockTypes = [
  {
    slot: 1,
    type: {
      name: "grass",
      url: "https://pokeapi.co/api/v2/type/12/",
    },
  },
  {
    slot: 2,
    type: {
      name: "poison",
      url: "https://pokeapi.co/api/v2/type/4/",
    },
  },
];

test("getPokemonColorsByTypes", () => {
  const types = getPokemonColorsByTypes(mockTypes);
  const { poison, grass } = POKEMON_TYPE_COLORS;
  expect(types).toEqual([grass, poison]);
});
