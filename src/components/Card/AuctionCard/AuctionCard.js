import PropTypes from "prop-types"
import React from "react"
import { Text, View } from "react-native"
import { textStyles } from "../../../styles"
import Icon from "../../Icon/Icon"
import styles, { card, size } from "./styles"

function AuctionCard({ name, budget }) {
	return (
        
		<View style={[card.card, size.card, card.small, card.highlight, card.highlightActive]}>
			<Icon 
				name="league"
				height={30}
				weight={30}
			/>
			<View style={styles.info}>
				<View style={styles.infoTeam}>
					<Text style={textStyles.h3}>{name}</Text>
					<Text style={textStyles.description}>{budget} fm</Text>
				</View>
			</View>
		</View>
	)
}

AuctionCard.propTypes = {
	name: PropTypes.string.isRequired,
	budget: PropTypes.string.isRequired
}

export default AuctionCard

