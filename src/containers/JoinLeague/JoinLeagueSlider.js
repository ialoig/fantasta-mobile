import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { Text, View } from "react-native"
import AppIntroSlider from "react-native-app-intro-slider"
import { Header } from "../../components"
import { button, text } from "../../components/Button/styles"
import { carouselSyle, commonStyle, textStyles } from "../../styles"

const JoinLeagueSlider = (props) => {

	const renderNextButton = () => {
		const type = "primary"
		return (
			<View style={[button.button, button.large, button.primary, commonStyle.content]}>
				<Text style={[textStyles.button, text[type]]}>{I18n.translate("next")}</Text>
			</View>
		)
	}

	const renderDoneButton = () => {
		const type = "primary"
		return (
			<View style={[button.button, button.large, button.primary, commonStyle.content]}>
				<Text style={[textStyles.button, text[type]]}>{I18n.translate("join")}</Text>
			</View>
		)
	}

	const _renderItem = ({ item, key }) => {
		const Page = item.component
		return (
			<View style={[commonStyle.container, commonStyle.paddingHeader]}>
				<Header title={item.title} />
				<View style={[commonStyle.content, commonStyle.flex_start]}>
					<Page item={item} {...props} />
				</View>
			</View>
		)
	}

	return (
		<AppIntroSlider
			renderItem={_renderItem}
			data={props.pages}
			bottomButton
			onDone={props.onDone}
			dotStyle={carouselSyle.dotStyle}
			activeDotStyle={carouselSyle.activeDotStyle}
			renderNextButton={renderNextButton}
			renderDoneButton={renderDoneButton}
		/>
	)
}

JoinLeagueSlider.propTypes = {
	pages: PropTypes.array.isRequired,
	onDone: PropTypes.func.isRequired
}


export default JoinLeagueSlider


