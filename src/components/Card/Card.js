
import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { commonStyle, textStyles } from "../../styles"

import { card, image, text } from "./styles"

const Card = (props) => {

	const { title, description, type, icon, arrow } = props
	let arrow_img = require("../../../assets/img/icons/forward.png")

	return (
		<TouchableOpacity onPress={props.onPress} style={[ card.card, card[type] ]}>
			{ icon &&
                <View style={image[type]}>
                	{/** TODO: gl - valutare sostituzione con componente Icon e relativo uso di Svg */}
                	<Image source={icon} />
                </View>
			}
			<View style={text[type]}>
				<Text style={textStyles.title}>{title}</Text>
				{description ? <Text style={textStyles.description}>{description}</Text> : null}
			</View>
			{ arrow &&
                <View style={[commonStyle.flex, card.arrow]}>
                	<Image style={image.forward} source={arrow_img} />
                </View>
			}
		</TouchableOpacity>
	)
}

export default Card
