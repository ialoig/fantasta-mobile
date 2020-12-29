import React from "react";
import { Router, Scene } from "react-native-router-flux";
import InkuboContainer from "./containers/inkubo/InkuboContainer";
import BeloxContainer from "./containers/belox/BeloxContainer";
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
      <Scene key="inkubo" component={InkuboContainer} title="Inkubo" />
      <Scene key="belox" component={BeloxContainer} title="Belox" />
    </Scene>
  </Router>
);
export default Routes;
