
import React from "react"
import { Actions } from "react-native-router-flux"

import { Auth, Init, Token } from '../../services'

import SplashScreen from './SplashScreen'

export class SplashScreenContainer extends React.Component {

  async componentDidMount ()
  {
      try
      {
        await Init()
      }
      catch (error)
      {
        console.log(error)

        //TODO: come vogliamo gestire l'errore???
      }

      let token = Token.Get()
      if ( token )
      {
        try
        {
          let res = await Auth.Authenticate( token )

          Actions.reset('Home')
        }
        catch (error)
        {
          Actions.reset('Login')
        }
      }
      else
      {
        Actions.reset('Login')
      }
  }

  render() {

    return (
      <SplashScreen />
    )
  }
}
