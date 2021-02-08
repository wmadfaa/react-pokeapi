import React, { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ROUTES } from "../globals";

const MainScreen = lazy(() => import("../routes/main"));
const DetailsScreen = lazy(() => import("../routes/details"));

const queryClient = new QueryClient();

const App: React.VFC = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
