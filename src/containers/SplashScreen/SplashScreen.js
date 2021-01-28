import React from "react";
import { View } from "react-native";

import { Logo } from '../../components'

import styles from "./styles";
import { commonStyle } from "../../styles"

const SplashScreen = (props) => {
  return (
    <View style={commonStyle.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
    </View>
  );
};

export default SplashScreen;
