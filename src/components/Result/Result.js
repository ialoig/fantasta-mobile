import PropTypes from "prop-types"
import React from "react"
import { Text, View } from "react-native"
import { Button } from ".."
import { carouselSyle, commonStyle } from "../../styles"
import Icon from "../Icon/Icon"
import styles from "./styles"

function Result({ title, description, iconType, buttonText, buttonOnPress }) {

	return (
		<View style={commonStyle.container}>

			<View style={styles.image}>
				<Icon name={iconType} width={120} height={120} />
			</View>

			<View style={commonStyle.title}>
				<Text style={carouselSyle.title}>{title}</Text>
				<Text style={carouselSyle.description}>{description}</Text>
			</View>

			<Button
				title={buttonText}
				onPress={buttonOnPress}
				type='primary'
				size='large'
			/>
		</View>
	)
}

Result.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	iconType: PropTypes.string.isRequired,
	buttonText: PropTypes.string.isRequired,
	buttonOnPress: PropTypes.func
}

Result.defaultProps = {
	title: "Title",
	description: "Description",
	buttonText: "ButtonText"
}

export default Result


