import React from "react";
import { Text, View } from "react-native";
import { Actions } from "react-native-router-flux";

import styles from './styles'

import SplashScreen from './SplashScreen'

export class SplashScreenContainer extends React.Component {

  static navigationOptions = {
      header: null
  }

  componentDidMount () {
    setTimeout(()=>{
      Actions.Login()
    }, 500)
  }

  render() {

    return (
      <SplashScreen />
    )
  }
}
