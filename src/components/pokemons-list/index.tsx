import React, { useMemo } from "react";
import { last, flatMap } from "lodash";
import { useAsync } from "react-async-hook";
import { InView, useInView } from "react-intersection-observer";
import { useInfinitePokemonsListQuery } from "./hooks/useInfinitePokemonsListQuery";
import { PokemonCard } from "./components/pokemon-card";

import "./styles.scss";

export const PokemonsList: React.VFC = () => {
  const { data, fetchNextPage, hasNextPage } = useInfinitePokemonsListQuery();
  const nextAnchorObserver = useInView({
    skip: !hasNextPage,
  });

  const handleFetchNextPage = useAsync(async () => {
    if (data && nextAnchorObserver.inView && !handleFetchNextPage.loading) {
      const lastPage = last(data.pages);
      await fetchNextPage({ pageParam: lastPage?.next });
    }
  }, [nextAnchorObserver.inView]);

  const allPokemons = useMemo(() => {
    if (data?.pages) {
      return flatMap(data.pages, (page) => page.results);
    }
    return [];
  }, [data?.pages]);

  return (
    <>
      <div className="pokemons-list">
        {allPokemons.map(({ id }) => (
          <InView key={id} triggerOnce>
            {({ ref, inView }) => (
              <PokemonCard id={id} ref={ref} inView={inView} />
            )}
          </InView>
        ))}
      </div>
      <div ref={nextAnchorObserver.ref} />
    </>
  );
};
