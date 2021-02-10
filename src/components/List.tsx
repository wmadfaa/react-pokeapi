import React from "react";
import { last } from "lodash";
import { useInfinitePokemonsListQuery } from "../services/useInfinitePokemonsListQuery";
import { InView, useInView } from "react-intersection-observer";
import { Card } from "./card";
import { useAsync } from "react-async-hook";

export interface ListProps {}

export const List: React.VFC<ListProps> = () => {
  const { data, fetchNextPage, hasNextPage } = useInfinitePokemonsListQuery();
  const nextAnchorObserver = useInView({
    skip: !hasNextPage,
  });

  const handleFetchNextPage = useAsync(async () => {
    if (nextAnchorObserver.inView && !handleFetchNextPage.loading) {
      const lastPage = last(data?.pages);
      await fetchNextPage({ pageParam: lastPage?.next });
    }
  }, [nextAnchorObserver.inView]);

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
      <div ref={nextAnchorObserver.ref} />
    </>
  );
};
