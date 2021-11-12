import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import Animated, { 
	useAnimatedStyle,
	useSharedValue,
	withSequence,
	withTiming } from "react-native-reanimated"
import { textStyles } from "../../../styles"
import Icon from "../../Icon/Icon"
import styles, { card, size } from "./styles"

function AuctionCard({ name, description, bid, isNewBid, highlight }) {

	const isChanged = useSharedValue()
	const [info, setInfo] = useState()

	useEffect(() => {
		isChanged.value = isNewBid

		setInfo( () => {
			if (bid) {
				return bid + " " + "fm"
			} else {
				return description ? description : ""
			}
		})

	}, [isNewBid, bid, description])

	const animStyle = useAnimatedStyle( () => {
		return {
			opacity: isNewBid ? 
				withSequence(
					withTiming(0, { duration: 50 }),
					withTiming(1, { duration: 300 }),
				) : 1,
		}
	})


	return (
        
		<Animated.View 
			style={[card.card, size.card, card.small, highlight ? card.highlight : null, animStyle]} >
			<Icon 
				name="league"
				height={30}
				weight={30}
			/>
			<View style={styles.info}>
				<View style={styles.infoTeam}>
					<Text style={textStyles.h3}>{name}</Text>
					<Text style={textStyles.description}>{info}</Text>
				</View>
			</View>
		</Animated.View>
	)
}

AuctionCard.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string,
	bid: PropTypes.number,
	isNewBid: PropTypes.bool,
	highlight: PropTypes.bool
}

export default AuctionCard

