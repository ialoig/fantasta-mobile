import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { Text, View } from "react-native"
import AppIntroSlider from "react-native-app-intro-slider"

import { button, text } from "../../components/Button/styles"
import Icon from "../../components/Icon/Icon"
import { carouselSyle, commonStyle } from "../../styles"
import styles from "./styles"

const GetStarted = (props) => {

	/** render Next button */
	const _renderNextButton = () => {
		return (
			<View style={[button.button, button.large, button.primary, commonStyle.content]}>
				<Text style={[text.text, text.large, text.primary]}>{I18n.translate("next")}</Text>
			</View>
		)
	}

	/** render done button */
	const _renderDoneButton = () => {
		return (
			<View style={[button.button, button.large, button.primary, commonStyle.content]}>
				<Text style={[text.text, text.large, text.primary]}>{I18n.translate("getStarted")}</Text>
			</View>
		)
	}

	const start = ({ item, key }) => {
        
		return (
			<View style={commonStyle.container} key={key}>
				<View style={styles.image} key={key}>
					<Icon name={item.image} width={120} height={120} />
				</View>
				<View style={commonStyle.flex} key={key}>
					<Text style={carouselSyle.title}>{item.title}</Text>
					<Text style={carouselSyle.description}>{item.description}</Text>
				</View>
			</View>
		)
	}

	return (
		<AppIntroSlider
			renderItem={start}
			data={props.data}
			bottomButton //show button on bottom side
			onDone={props.onDone}
			dotStyle={carouselSyle.dotStyle}
			activeDotStyle={carouselSyle.activeDotStyle}
			renderNextButton={_renderNextButton}
			renderDoneButton={_renderDoneButton}
		/>
	)
}

export default GetStarted


GetStarted.propTypes = {
	data: PropTypes.object.isRequired,
	onDone: PropTypes.func.isRequired
}
