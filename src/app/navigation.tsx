import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimateSharedLayout } from "framer-motion";
import { Header } from "../components/Header";

import DetailsScreen from "../routes/details";

export function Navigation() {
  return (
    <div className="max-w-screen-lg w-full px-4 sm:px-6 lg:px-8">
      <AnimateSharedLayout type="crossfade">
        <Header />
        <Router>
          <Route path={["/:id", "/"]} component={DetailsScreen} />
        </Router>
      </AnimateSharedLayout>
    </div>
  );
}
