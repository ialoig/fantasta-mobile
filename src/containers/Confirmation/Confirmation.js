import PropTypes from "prop-types"
import React from "react"
import { Text, View } from "react-native"
import { Button } from "../../components"
import Icon from "../../components/Icon/Icon"
import { commonStyle } from "../../styles/"
import styles from "./styles"

function Confirmation({ title, description, buttonText, buttonOnPress }) {

	return (
		<View style={[commonStyle.container, commonStyle.flex_start]}>

			<View style={styles.image}>
				<Icon name={"confirm"} width={120} height={120} />
			</View>

			<View style={commonStyle.flex}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.description}>{description}</Text>
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

Confirmation.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	buttonText: PropTypes.string.isRequired,
	buttonOnPress: PropTypes.func
}

Confirmation.defaultProps = {
	title: "Title",
	description: "Description",
	buttonText: "ButtonText"
}

export default Confirmation


