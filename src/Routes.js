import React from "react";
import { Router, Scene } from "react-native-router-flux";

import { LoginContainer } from "./containers/login/LoginContainer";
import { SplashScreenContainer } from "./containers/splashscreen/SplashScreenContainer";
import { RegisterContainer } from './containers/Register/RegisterContainer'

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="SplashScreen" component={SplashScreenContainer} title="FantAsta" initial={true} />
      <Scene key="Login" component={LoginContainer} title="Login" back={false} />
      <Scene key="Register" component={RegisterContainer} title="Register" back={false} />
    </Scene>
  </Router>
);
export default Routes;
