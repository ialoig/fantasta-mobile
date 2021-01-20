import React from "react";
import { Router, Scene } from "react-native-router-flux";

import { LoginContainer } from "./containers/Login/LoginContainer";
import { SplashScreenContainer } from "./containers/Splashscreen/SplashScreenContainer";
import { RegisterContainer } from './containers/Register/RegisterContainer'
import { HomeContainer } from './containers/Home/HomeContainer'

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="SplashScreen" component={SplashScreenContainer} title="FantAsta" initial={true} />
      <Scene key="Login" component={LoginContainer} title="Login" back={false} />
      <Scene key="Register" component={RegisterContainer} title="Register" back={false} />
      <Scene key="Home" component={HomeContainer} title="Home" back={false} />
    </Scene>
  </Router>
);
export default Routes;
