
import React from "react"
import { Router, Scene } from "react-native-router-flux"

import { LoginContainer } from "./containers/Login/LoginContainer"
import { SplashScreenContainer } from "./containers/SplashScreen/SplashScreenContainer"
import { RegisterContainer } from './containers/Register/RegisterContainer'
import { GetStartedContainer } from "./containers/GetStarted/GetStartedContainer"
import { HomeContainer } from './containers/Home/HomeContainer'
import { CreateContainer } from './containers/Create/CreateContainer'
import { JoinLeagueContainer } from './containers/JoinLeague/JoinLeagueContainer'
import { DashboardContainer } from './containers/Dashboard/DashboardContainer'
import { AccountNavigator } from './containers/Account/AccountNavigator'

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="SplashScreen" component={SplashScreenContainer} title="FantAsta" initial={true} hideNavBar="true" />
      <Scene key="Login" component={LoginContainer} title="Login" back={false} hideNavBar="true" />
      <Scene key="Register" component={RegisterContainer} title="Register" back={false} hideNavBar="true" />
      <Scene key="GetStarted" component={GetStartedContainer} title="GetStarted" back={false} hideNavBar="true" /> 
      <Scene key="Home" component={HomeContainer} title="Home" back={false} hideNavBar="true"/>
      <Scene key="Create" component={CreateContainer} title="Create" back={true} hideNavBar="true" />
      <Scene key="JoinLeague" component={JoinLeagueContainer} title="JoinLeague" back={true} hideNavBar="true" />
      <Scene key="Dashboard" component={DashboardContainer} title="Dashboard" back={true} hideNavBar="true" />
      <Scene key="Account" component={AccountNavigator} title="Account" back={false} hideNavBar="true" />
    </Scene>
  </Router>
)

export default Routes
