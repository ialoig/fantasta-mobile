import React from "react";
import { Router, Scene } from "react-native-router-flux";

import { LoginContainer } from "./containers/Login/LoginContainer";
import { SplashScreenContainer } from "./containers/SplashScreen/SplashScreenContainer";
import { RegisterContainer } from './containers/Register/RegisterContainer'
import { StartPageContainer } from './containers/StartPage/StartPageContainer'
import { HomeContainer } from './containers/Home/HomeContainer'
import { GetStartedContainer } from "./containers/GetStarted/GetStartedContainer";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="SplashScreen" component={SplashScreenContainer} title="FantAsta" initial={true} />
      <Scene key="Login" component={LoginContainer} title="Login" back={false} />
      <Scene key="Register" component={RegisterContainer} title="Register" back={false} />
      <Scene key="StartPage" component={StartPageContainer} title="StartPage" back={false} />
      <Scene key="Home" component={HomeContainer} title="Home" back={false} />
      <Scene key="GetStarted" component={GetStartedContainer} title="GetStarted" back={false} hideNavBar="true" /> 
    </Scene>
  </Router>
);
export default Routes;
