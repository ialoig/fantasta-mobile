import React from "react";
import { View } from "react-native";

import Belox from "./Belox";
import NavigationBarContainer from "../navigationbar/NavigationBarContainer";

export default class BeloxContainer extends React.Component {
  state = {
    mytext: "Quanto è coglione Belox da 1 a 5?",
  };

  buttonHandlePress = (id) => {
    switch (id) {
      case 1:
        alert(`Hai risposto ${id}.\nHai capito di chi stiamo parlando?`);
        break;
      case 2:
        alert(`Hai risposto ${id}.\nSei sicuro di conoscerlo bene?`);
        break;
      case 3:
        alert(`Hai risposto ${id}.\nmmm... ma sei ubriaco?`);
        break;
      case 4:
        alert(
          `Hai risposto ${id}.\nCi siamo quasi...ritenta sarai più fortunato`
        );
        break;
      case 5:
        alert(`Hai risposto ${id}.\nBRAVISSIMO! ma come hai fatto?`);
        break;
      default:
    }
  };

  render() {
    return (
      <View>
        <Belox
          mytext={this.state.mytext}
          buttonHandlePress={this.buttonHandlePress}
        />
        <NavigationBarContainer />
      </View>
    );
  }
}
