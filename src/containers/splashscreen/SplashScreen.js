import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";

const SplashScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </View>
  );
};

export default SplashScreen;
