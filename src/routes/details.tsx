import React from "react";
import { RouteComponentProps } from "react-router-dom";
import ScreenWrapper from "../components/screen-wrapper";
import { usePokemonQuery } from "../services/usePokemonQuery";

type TParams = { id: string };

interface DetailsScreenProps extends RouteComponentProps<TParams> {}

const DetailsScreen: React.VFC<DetailsScreenProps> = ({ match }) => {
  const { id } = match.params;
  const { data } = usePokemonQuery(id);

  console.log(data);

  return (
    <ScreenWrapper>
      <div>Details Screen {id}</div>
    </ScreenWrapper>
  );
};

export default DetailsScreen;
