import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimateSharedLayout } from "framer-motion";
import { ROUTES } from "../globals";
import { Header } from "../components/Header";

import DetailsScreen from "../routes/details";

export function Navigation() {
  return (
    <div className="container">
      <AnimateSharedLayout type="crossfade">
        <Header />
        <Router>
          <Route path={["/:id", "/"]} component={DetailsScreen} />
        </Router>
      </AnimateSharedLayout>
    </div>
  );
}
