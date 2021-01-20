import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Home</Text>
      </View>
    </View>
  );
};

export default Home
