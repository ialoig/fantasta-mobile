import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { Text, View } from "react-native"
import AppIntroSlider from "react-native-app-intro-slider"
import { button, text } from "../../components/Button/styles"
import Header from "../../components/Header/Header"
import { carouselSyle, commonStyle, textStyles } from "../../styles"

const Create = (props) => {

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
				<Text style={[textStyles.button, text[type]]}>{I18n.translate("create")}</Text>
			</View>
		)
	}

	const Crea = ({ item, key }) => {

		const Page = item.component


		return (
			<View style={[commonStyle.container, commonStyle.paddingHeader]}>
				<Header title={item.title} />
				<View style={[commonStyle.content, commonStyle.flex_start]} key={key}>
					<Page item={item} {...props} />
				</View>
			</View>
		)
	}

	const onSlideChange = (index, lastIndex) => {
		const swipingNext = lastIndex < index
		const swipingBack = lastIndex > index

		if (swipingNext) {
			if (props.validatePage(lastIndex) == false) {
				slider.goToSlide(lastIndex)
			}
		}
	}

	var slider = AppIntroSlider;

	return (
		<AppIntroSlider
			renderItem={Crea}
			data={props.pages}
			bottomButton
			onDone={props.onDone}
			dotStyle={carouselSyle.dotStyle}
			activeDotStyle={carouselSyle.activeDotStyle}
			renderNextButton={renderNextButton}
			renderDoneButton={renderDoneButton}
			onSlideChange={onSlideChange}
			popupClosedCallback={props.popupClosedCallback}
			ref={(ref) => (slider = ref)}
		/>
	)
}


Create.propTypes = {
	pages: PropTypes.array.isRequired,
	onDone: PropTypes.func.isRequired
}

export default Create
