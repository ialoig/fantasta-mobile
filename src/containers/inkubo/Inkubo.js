import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import styles from "./styles";

const Inkubo = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.mytext}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.buttonHandlePress(1)}
        >
          <Text>1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => props.buttonHandlePress(2)}
        >
          <Text>2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => props.buttonHandlePress(3)}
        >
          <Text>3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => props.buttonHandlePress(4)}
        >
          <Text>4</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => props.buttonHandlePress(5)}
        >
          <Text>5</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Inkubo;
