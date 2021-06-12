import I18n from "i18n-js"
import { isNil } from "lodash"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { Pressable, Text, View } from "react-native"
import Icon from "../Icon/Icon"
import { size, style, text } from "./styles"

const statsCardType = ["small", "large", "four"]

const StatsCard = ({ type, value1, desc1, ...props }) => {

	
	return (
		<Pressable style={[style.card, size[type], style[type]]}>
			<View style={style.stat}>
				<Text style={text.statValue}>{value1}</Text>
				<Text style={text.statDescription}>{desc1}</Text>
			</View>

			{
				!(type === "small") && !isNil(props.value2) && !isNil(props.desc2) &&
				<>
					<Icon name="separator" horizontal={false} />

					<View style={style.stat}>
						<Text style={text.statValue}>{props.value2}</Text>
						<Text style={text.statDescription}>{props.desc2}</Text>
					</View>
				</>
			}

			{
				!(type === "small") && !isNil(props.value3) && !isNil(props.desc3) &&
				<>
					<Icon name="separator" horizontal={false} />

					<View style={style.stat}>
						<Text style={text.statValue}>{props.value3}</Text>
						<Text style={text.statDescription}>{props.desc3}</Text>
					</View>
				</>
			}

			{
				!(type === "small") && !isNil(props.value4) && !isNil(props.desc4) &&
				<>
					<Icon name="separator" horizontal={false} />

					<View style={style.stat}>
						<Text style={text.statValue}>{props.value4}</Text>
						<Text style={text.statDescription}>{props.desc4}</Text>
					</View>
				</>
			}

		</Pressable>
	)
}

StatsCard.propTypes = {
	type: PropTypes.oneOf([...Object.values(statsCardType)]).isRequired,
	value1: PropTypes.number,
	desc1: PropTypes.string
}

export default StatsCard