import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimateSharedLayout } from "framer-motion";
import { Header } from "../components/Header";

import DetailsScreen from "../routes/details";

export function Navigation() {
  return (
    <div className="max-w-screen-lg w-full p-4 sm:p-6 lg:p-8">
      <AnimateSharedLayout type="crossfade">
        <Header />
        <Router>
          <Route path={["/:id", "/"]} component={DetailsScreen} />
        </Router>
      </AnimateSharedLayout>
    </div>
  );
}
