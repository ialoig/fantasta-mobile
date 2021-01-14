import React from "react";
import { Actions } from "react-native-router-flux";

import { Init, Storage } from '../../services'

import SplashScreen from './SplashScreen'

export class SplashScreenContainer extends React.Component {

  static navigationOptions = {
    header: null
  }

  async componentDidMount ()
  {
      await Init()

      let token = await Storage.Get( 'token' )

      if ( token )
      {

      }
      else
      {
          Actions.Login();
      }
  }

  render() {

    return (
      <SplashScreen />
    )
  }
}
