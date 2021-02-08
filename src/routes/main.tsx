import React from "react";
import { RouteComponentProps } from "react-router-dom";
import ScreenWrapper from "../components/screen-wrapper";

interface MainScreenProps extends RouteComponentProps {}

const MainScreen: React.VFC<MainScreenProps> = () => {
  return (
    <ScreenWrapper>
      <div>Main Screen</div>
    </ScreenWrapper>
  );
};

export default MainScreen;
