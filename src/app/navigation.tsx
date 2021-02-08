import React, { lazy, Suspense } from "react";
import { useAsync } from "react-async-hook";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { usePrefetchPokemonsList } from "../services/useInfinitePokemonsListQuery";
import { ROUTES } from "../globals";

const MainScreen = lazy(() => import("../routes/main"));
const DetailsScreen = lazy(() => import("../routes/details"));

export function Navigation() {
  const prefetchPokemonsList = usePrefetchPokemonsList();

  useAsync(async () => {
    if (!prefetchPokemonsList.loading) {
      await prefetchPokemonsList.execute();
    }
  }, []);

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <AnimatePresence>
          <Switch>
            <Route exact path={ROUTES.MAIN} component={MainScreen} />
            <Route path={ROUTES.DETAILS} component={DetailsScreen} />
          </Switch>
        </AnimatePresence>
      </Suspense>
    </Router>
  );
}
