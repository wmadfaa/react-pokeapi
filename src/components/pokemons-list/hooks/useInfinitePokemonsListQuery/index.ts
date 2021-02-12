import { useInfiniteQuery, useIsFetching, useQueryClient } from "react-query";
import { useAsyncCallback } from "react-async-hook";
import {
  getPokemonsList,
  TransformedPokemonsList,
  PokemonsListParams,
} from "api";
import { FetchInfiniteQueryOptions } from "react-query/types/core/types";

const DEFAULT_POKEMONS_LIST_PARAMS: PokemonsListParams = {
  limit: 20,
  offset: 0,
};

const fetchInfiniteQueryOptions: FetchInfiniteQueryOptions<
  TransformedPokemonsList,
  Error,
  TransformedPokemonsList
> = {
  getPreviousPageParam: ({ previous }) => previous ?? false,
  getNextPageParam: ({ next }) => next ?? false,
};

export function useInfinitePokemonsListQuery(
  interval = DEFAULT_POKEMONS_LIST_PARAMS
) {
  return useInfiniteQuery<
    TransformedPokemonsList,
    Error,
    TransformedPokemonsList
  >(
    ["pokemons-list", interval],
    ({ pageParam = interval }) => {
      return getPokemonsList(pageParam);
    },
    {
      getPreviousPageParam: ({ previous }) => previous ?? false,
      getNextPageParam: ({ next }) => next ?? false,
    }
  );
}

export function usePrefetchPokemonsList(
  interval = DEFAULT_POKEMONS_LIST_PARAMS
) {
  const queryClient = useQueryClient();
  const isFetching = useIsFetching(["pokemons-list", interval]);

  return useAsyncCallback(async (params: PokemonsListParams = interval) => {
    if (!isFetching) {
      await queryClient.prefetchInfiniteQuery(
        ["pokemons-list", interval],
        ({ pageParam = params }) => {
          return getPokemonsList(pageParam);
        },
        fetchInfiniteQueryOptions as any
      );
    }
  });
}
