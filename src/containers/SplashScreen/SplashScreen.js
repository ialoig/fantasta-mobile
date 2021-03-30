
import React from "react"
import { View } from "react-native"
import { Logo } from "../../components"
import styles from "./styles"


function SplashScreen () {
	return (
		<View style={styles.logo}>
			<Logo />
		</View>
	)
}

export default SplashScreen
