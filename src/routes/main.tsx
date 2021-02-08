import React from "react";
import { RouteComponentProps } from "react-router-dom";
import ScreenWrapper from "../components/screen-wrapper";
import { useInfinitePokemonsListQuery } from "../services/useInfinitePokemonsListQuery";

interface MainScreenProps extends RouteComponentProps {}

const MainScreen: React.VFC<MainScreenProps> = () => {
  const { data } = useInfinitePokemonsListQuery();

  console.log(data);

  return (
    <ScreenWrapper>
      <div>Main Screen</div>
    </ScreenWrapper>
  );
};

export default MainScreen;
