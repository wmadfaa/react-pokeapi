import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Item } from "../components/Item";
import { AnimatePresence } from "framer-motion";
import { List } from "../components/List";
import Portal from "../components/Portal";

type TParams = { id: string };

interface DetailsScreenProps extends RouteComponentProps<TParams> {}

const DetailsScreen: React.VFC<DetailsScreenProps> = ({ match }) => {
  const { id } = match.params;
  const imageHasLoaded = true;

  return (
    <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && (
          <Portal>
            <Item id={id} key="item" />
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
};

export default DetailsScreen;
