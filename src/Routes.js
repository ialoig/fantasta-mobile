import React from "react";
import { Router, Scene } from "react-native-router-flux";
import LoginContainer from "./containers/login/LoginContainer";
import SplashScreenContainer from "./containers/splashscreen/SplashScreenContainer";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="SplashScreen"
        component={SplashScreenContainer}
        title="FantAsta"
        initial={true}
      />
      <Scene key="login" component={LoginContainer} title="Login" />
    </Scene>
  </Router>
);
export default Routes;
