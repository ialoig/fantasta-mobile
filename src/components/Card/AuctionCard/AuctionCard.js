import PropTypes from "prop-types"
import React from "react"
import { Text, View } from "react-native"
import Animated from "react-native-reanimated"
import { textStyles } from "../../../styles"
import Icon from "../../Icon/Icon"
import styles, { card, size } from "./styles"

function AuctionCard({ name, bid }) {
	return (
        
		<Animated.View 
			style={[card.card, size.card, card.small, card.highlight, card.highlightActive]}
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

