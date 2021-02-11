
import React from "react"
import { Router, Scene } from "react-native-router-flux"

import { LoginContainer } from "./containers/Login/LoginContainer"
import { SplashScreenContainer } from "./containers/SplashScreen/SplashScreenContainer"
import { RegisterContainer } from './containers/Register/RegisterContainer'
import { GetStartedContainer } from "./containers/GetStarted/GetStartedContainer"
import { HomeContainer } from './containers/Home/HomeContainer'
import { CreateContainer } from './containers/Create/CreateContainer'
import { JoinContainer } from './containers/Join/JoinContainer'
import { DashboardContainer } from './containers/Dashboard/DashboardContainer'

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="SplashScreen" component={SplashScreenContainer} title="FantAsta" initial={true} hideNavBar="true" />
      <Scene key="Login" component={LoginContainer} title="Login" back={false} hideNavBar="true" />
      <Scene key="Register" component={RegisterContainer} title="Register" back={false} hideNavBar="true" />
      <Scene key="GetStarted" component={GetStartedContainer} title="GetStarted" back={false} hideNavBar="true" /> 
      <Scene key="Home" component={HomeContainer} title="Home" back={false} hideNavBar="true"/>
      <Scene key="Create" component={CreateContainer} title="Create" back={true} hideNavBar="true" />
      <Scene key="Join" component={JoinContainer} title="Join" back={true} hideNavBar="true" />
      <Scene key="Dashboard" component={DashboardContainer} title="Dashboard" back={true} hideNavBar="true" />
    </Scene>
  </Router>
)

export default Routes
