import { useNavigation } from "@react-navigation/native"
import React from "react"

import { View } from "react-native"
import { Header } from "../../../components"
import { commonStyle } from "../../../styles"

import styles from "../styles"

function ContactUs() {

	//hook which give access to the navigation object from the component directly
	const { goBack } = useNavigation()

	return (
		<View style={commonStyle.container}>
			{ /** header */}
			<Header title="contact" backButton={true} onPressBack={() => goBack()}/>

			<View style={styles.cardContent}>

			</View>
		</View>
	)
}

export default ContactUs

