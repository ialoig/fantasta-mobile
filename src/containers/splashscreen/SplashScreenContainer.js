import React from "react";
import { View } from "react-native";

import SplashScreen from "./SplashScreen";
import NavigationBarContainer from "../navigationbar/NavigationBarContainer";

export default class SplashScreenContainer extends React.Component {
  state = {
    text: "SPLASHSCREEN\n\n\nFANTASTA",
  };

  render() {
    return (
      <View>
        <SplashScreen text={this.state.text} />
        <NavigationBarContainer />
      </View>
    );
  }
}
