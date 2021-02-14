import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimateSharedLayout } from "framer-motion";
import { Header } from "../components/header";

import DetailsScreen from "../routes/details";

export function Navigation() {
  return (
    <div className="screen">
      <AnimateSharedLayout type="crossfade">
        <Header />
        <Router basename={process.env.PUBLIC_URL}>
          <Route path={["/:id", "/"]} component={DetailsScreen} />
        </Router>
      </AnimateSharedLayout>
    </div>
  );
}
