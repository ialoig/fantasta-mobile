
import I18n from "i18n-js"
import React from "react"
import { Text, View } from "react-native"
import AppIntroSlider from "react-native-app-intro-slider"

import { button, text} from "../../components/Button/styles"
import Header from "../../components/Header/Header"
import { carouselSyle, commonStyle } from "../../styles"
import styles from "./styles"

const Create = (props) => {

	const renderNextButton = () => {
		return (
			<View style={[button.button, button.large, button.primary, commonStyle.content]}>
				<Text style={[text.text, text.large, text.primary]}>{I18n.translate("next")}</Text>
			</View>
		)
	}
    
	const renderDoneButton = () => {
		return (
			<View style={[button.button, button.large, button.primary, commonStyle.content]}>
				<Text style={[text.text, text.large, text.primary]}>{I18n.translate("create")}</Text>
			</View>
		)
	}
    
	const Crea = ({ item, key }) => {
    
		const Page = item.component


		return (
			<View style={commonStyle.container}>
				<Header title={item.title} />
				<View style={[commonStyle.content, commonStyle.flex_start]} key={key}>
					<Page item={item} {...props} />
				</View>
			</View>
		)
	}

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
		/>
	)
}

export default Create
