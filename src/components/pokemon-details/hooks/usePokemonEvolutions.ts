import { useQuery } from "react-query";
import {
  getPokemonEvolutionChain,
  getPokemonSpecies,
  getPokemon,
  Chain,
  Pokemon,
} from "api";
import { extractIdFromUrl } from "api/utils";

function extractPokemonNames(chain: Chain) {
  const flatten = (data: Chain, prev: string[] = []): string[] => {
    if (data.evolves_to.length) {
      return flatten(data.evolves_to[0], [...prev, data.species.name]);
    }
    return [...prev, data.species.name];
  };
  return flatten(chain);
}

export function usePokemonEvolutions(id: string) {
  return useQuery<Pokemon[], Error, Pokemon[]>(
    ["pokemon-evolutions", id],
    async () => {
      const pokemons = [];
      const pokemon = await getPokemon(id);
      const species = await getPokemonSpecies(pokemon.species.name);
      const chainId = extractIdFromUrl(species.evolution_chain.url);
      const { chain } = await getPokemonEvolutionChain(chainId);
      const names = extractPokemonNames(chain);
      for (const name of names) {
        pokemons.push(await getPokemon(name));
      }
      return pokemons;
    }
  );
}
