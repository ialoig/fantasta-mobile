import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { Text, View } from "react-native"
import Animated, { 
	useAnimatedStyle,
	useSharedValue,
	withSequence,
	withTiming } from "react-native-reanimated"
import { textStyles } from "../../../styles"
import Icon from "../../Icon/Icon"
import styles, { card, size } from "./styles"

function AuctionCard({ name, bid, hasChanged, topBid }) {

	const isChanged = useSharedValue()

	useEffect(() => {
		console.log("[AuctionCard] - useEffect - hasChanged:", hasChanged)
		isChanged.value = hasChanged

	}, [hasChanged])

	const animStyle = useAnimatedStyle( () => {
		return {
			opacity: isChanged.value ? 
				withSequence(
					withTiming(0, { duration: 100 }),
					withTiming(1, { duration: 500 }),
				) : 1,
		}
	})


	return (
        
		<Animated.View 
			style={[card.card, size.card, card.small, topBid ? card.highlight : null, animStyle]}
		>
			<Icon 
				name="league"
				height={30}
				weight={30}
			/>
			<View style={styles.info}>
				<View style={styles.infoTeam}>
					<Text style={textStyles.h3}>{name}</Text>
					<Text style={textStyles.description}>{bid} fm</Text>
				</View>
			</View>
		</Animated.View>
	)
}

AuctionCard.propTypes = {
	name: PropTypes.string.isRequired,
	bid: PropTypes.string.isRequired
}

export default AuctionCard

