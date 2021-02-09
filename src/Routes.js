
import React from "react"
import { Router, Scene } from "react-native-router-flux"

import { LoginContainer } from "./containers/Login/LoginContainer"
import { SplashScreenContainer } from "./containers/SplashScreen/SplashScreenContainer"
import { RegisterContainer } from './containers/Register/RegisterContainer'
import { GetStartedContainer } from "./containers/GetStarted/GetStartedContainer"
import { HomeContainer } from './containers/Home/HomeContainer'
import { CreateContainer } from './containers/Create/CreateContainer'
import { JoinContainer } from './containers/Join/JoinContainer'
import { AuctionContainer } from './containers/Auction/AuctionContainer'
import { AccountContainer } from './containers/Account/AccountContainer'

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="SplashScreen" component={SplashScreenContainer} title="FantAsta" hideNavBar="true" />
      <Scene key="Login" component={LoginContainer} title="Login" back={false} hideNavBar="true" />
      <Scene key="Register" component={RegisterContainer} title="Register" back={false} hideNavBar="true" />
      <Scene key="GetStarted" component={GetStartedContainer} title="GetStarted" back={false} hideNavBar="true" /> 
      <Scene key="Home" component={HomeContainer} title="Home" back={false} hideNavBar="true"/>
      <Scene key="Create" component={CreateContainer} title="Create" back={false} hideNavBar="true" />
      <Scene key="Join" component={JoinContainer} title="Join" back={false} hideNavBar="true" />
      <Scene key="Auction" component={AuctionContainer} title="Auction" back={false} hideNavBar="true" />
      <Scene key="Account" component={AccountContainer} title="Account" initial={true} back={false} hideNavBar="true" />
    </Scene>
  </Router>
)

export default Routes
