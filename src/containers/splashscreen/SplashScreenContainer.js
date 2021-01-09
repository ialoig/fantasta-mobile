import React from "react";
import { Text, View } from "react-native";
import { Actions } from "react-native-router-flux";
import * as Font from "expo-font";

import styles from './styles'
import SplashScreen from "./SplashScreen";

export class SplashScreenContainer extends React.Component {

  static navigationOptions = {
    header: null
  }

  loadFonts = async () => {
    return Font.loadAsync({
       PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
       PoppinsBold: require("../../../assets/fonts/Poppins-Bold.ttf"),
       PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
       PoppinsMedium: require("../../../assets/fonts/Poppins-Medium.ttf")
    })
  }

  async componentDidMount () {
    Promise.all([
      this.loadFonts(),
    ])
    .then( () => {
      Actions.Login();
    })
  }

  render() {

    return (
      <SplashScreen/>
    );
  }
}
