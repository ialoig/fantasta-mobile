import React from "react";
import { View } from "react-native";
import { Actions } from "react-native-router-flux";

import NavigationBar from "./NavigationBar";

export default class NavigationBarContainer extends React.Component {
  state = {
    inkubo: "INKUBO",
    belox: "BELOX",
  };

  goToInkubo = () => {
    Actions.inkubo();
  };

  goToBelox = () => {
    Actions.belox();
  };

  render() {
    return (
      <View>
        <NavigationBar
          inkubo={this.state.inkubo}
          belox={this.state.belox}
          goToInkubo={this.goToInkubo}
          goToBelox={this.goToBelox}
        />
      </View>
    );
  }
}
