import React from "react";
import { View } from "react-native";

import NavigationBar from "./NavigationBar";

export default class NavigationBarContainer extends React.Component {
  state = {};

  render() {
    return (
      <View>
        <NavigationBar
          text="LOGIN"
          goToLogin={() => this.props.navigation.navigate("Login")}
        />
      </View>
    );
  }
}
