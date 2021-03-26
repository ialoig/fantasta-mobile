
import React from "react"
import { View } from "react-native"

import { Logo } from "../../components"

import { commonStyle } from "../../styles"
import styles from "./styles"

const SplashScreen = (props) => {
	return (
		<View style={styles.logo}>
			<Logo />
		</View>
	)
}

export default SplashScreen
