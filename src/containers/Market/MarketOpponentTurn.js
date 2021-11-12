import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { Text, View } from "react-native"
import AuctionCard from "../../components/Card/AuctionCard/AuctionCard"
import Countdown from "../../components/Countdown/Countdown"
import Icon from "../../components/Icon/Icon"
import { textStyles } from "../../styles"
import styles from "./styles"

function MarketOpponentTurn(props) {
	return (
		<View style={styles.container}>
			<Text style={[textStyles.h2, textStyles.alignCenter]}>
				{"Remaining time"}
			</Text>

			<View style={styles.opponentTurnInfo}>
				<Countdown 
					minutes={0}
					seconds={25}
					type={"large"}
				/>
				<AuctionCard 
					name={"team"}
					bid={100}
					type={"large"}
				/>

				<Text style={[textStyles.h2, textStyles.alignCenter]}>
					{"is looking for a player ..."}
				</Text>

			</View>
			<View style={styles.roles}>
				<Icon name="role" role={"P"} animated />
				<Icon name="role" role={"D"} animated />
				<Icon name="role" role={"C"} animated />
				<Icon name="role" role={"A"} animated />
			</View>
		</View>
	)
}

MarketOpponentTurn.propTypes = {

}

export default MarketOpponentTurn

