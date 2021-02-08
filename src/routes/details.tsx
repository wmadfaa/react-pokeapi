import React from "react";
import { RouteComponentProps } from "react-router-dom";
import ScreenWrapper from "../components/screen-wrapper";

type TParams = { id: string };

interface DetailsScreenProps extends RouteComponentProps<TParams> {}

const DetailsScreen: React.VFC<DetailsScreenProps> = ({ match }) => {
  return (
    <ScreenWrapper>
      <div>Details Screen {match.params.id}</div>
    </ScreenWrapper>
  );
};

export default DetailsScreen;
