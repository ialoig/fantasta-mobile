import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { Text, View } from "react-native"
import Animated, { 
	useAnimatedStyle,
	useSharedValue,
	withSequence,
	withSpring,
	withTiming } from "react-native-reanimated"
import { textStyles } from "../../../styles"
import Icon from "../../Icon/Icon"
import styles, { card, size } from "./styles"

function AuctionCard({ name, bid, isNewBid, topBid }) {

	const isChanged = useSharedValue()

	useEffect(() => {
		isChanged.value = isNewBid

	}, [isNewBid])

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
			style={[card.card, size.card, card.small, topBid ? card.highlight : null, animStyle]} >
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

