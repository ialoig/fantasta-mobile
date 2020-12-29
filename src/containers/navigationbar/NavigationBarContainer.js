import React from "react";
import { View } from "react-native";
import { Actions } from "react-native-router-flux";

import NavigationBar from "./NavigationBar";

export default class NavigationBarContainer extends React.Component {
  state = {};

  render() {
    return (
      <View>
        <NavigationBar
          text="LOGIN"
          goToLogin={Actions.login}
        />
      </View>
    );
  }
}
