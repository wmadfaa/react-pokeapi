import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Item } from "../components/Item";
import { AnimatePresence } from "framer-motion";
import { List } from "../components/List";

type TParams = { id: string };

interface DetailsScreenProps extends RouteComponentProps<TParams> {}

const DetailsScreen: React.VFC<DetailsScreenProps> = ({ match }) => {
  const { id } = match.params;
  const imageHasLoaded = true;

  return (
    <>
      <List />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </>
  );
};

export default DetailsScreen;
