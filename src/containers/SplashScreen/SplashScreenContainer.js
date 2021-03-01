
import React from "react"

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

        //TODO: come vogliamo gestire l'errore???
      }

      let token = Token.Get()
      if ( token )
      {
        try
        {
          let res = await Auth.Authenticate( token )
          this.props.navigation.navigate("Home")
        }
        catch (error)
        {
          this.props.navigation.navigate("Login")
        }
      }
      else
      {
        this.props.navigation.navigate("Login")
      }
  }

  render() {

    return (
      <SplashScreen />
    )
  }
}
