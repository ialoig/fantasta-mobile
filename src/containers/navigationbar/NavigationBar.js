import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"

import styles from "./styles"

const NavigationBar = (props) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.loginButton}
				onPress={() => props.goToLogin()}
			>
				<Text>{props.text}</Text>
			</TouchableOpacity>
		</View>
	)
}

export default NavigationBar
