import React from "react";
import { last } from "lodash";
import { useInfinitePokemonsListQuery } from "../services/useInfinitePokemonsListQuery";
import { InView } from "react-intersection-observer";
import { Card } from "./card";
import { useAsyncCallback } from "react-async-hook";

export const List: React.VFC = () => {
  const {
    data,
    fetchNextPage,
    isFetching,
    isLoading,
    hasNextPage,
  } = useInfinitePokemonsListQuery();

  const handleFetchNextPage = useAsyncCallback(async (inView: boolean) => {
    if (inView) {
      const lastPage = last(data?.pages);
      await fetchNextPage({ pageParam: lastPage?.next });
    }
  });

  if (!data?.pages) return null;

  return (
    <>
      <ul className="card-list">
        {data?.pages.map((page) =>
          page.results.map((pokemon) => (
            <InView key={pokemon.id} triggerOnce>
              {({ inView, ref }) => (
                <li className="card" ref={ref}>
                  <Card {...pokemon} inView={inView} />
                </li>
              )}
            </InView>
          ))
        )}
      </ul>
      <InView
        as="div"
        onChange={handleFetchNextPage.execute}
        skip={!hasNextPage || handleFetchNextPage.loading}
      >
        {!hasNextPage
          ? ""
          : isLoading
          ? "loading..."
          : isFetching
          ? "fetching..."
          : ""}
      </InView>
    </>
  );
};
