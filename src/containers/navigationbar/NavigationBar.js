import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

const NavigationBar = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.inkuboButton}
        onPress={() => props.goToInkubo(1)}
      >
        <Image
          style={styles.imageButton}
          source={require("../../assets/img/inkubo.png")}
        />
        <Text>{props.inkubo}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.beloxButton}
        onPress={() => props.goToBelox(1)}
      >
        <Image
          style={styles.imageButton}
          source={require("../../assets/img/belox.png")}
        />
        <Text>{props.belox}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationBar;
