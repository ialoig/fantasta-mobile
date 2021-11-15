import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { Text, View } from "react-native"
import AuctionCard from "../../components/Card/AuctionCard/AuctionCard"
import Countdown from "../../components/Countdown/Countdown"
import AnimatedIcon from "../../components/Icon/AnimatedIcon"
import Icon from "../../components/Icon/Icon"
import { textStyles } from "../../styles"
import styles from "./styles"

function MarketOpponentTurn(props) {
	return (
		<View style={styles.container}>
			<Text style={[textStyles.h2, textStyles.alignCenter]}>
				{I18n.translate("remaining_time")}
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
					{I18n.translate("looking_for")}
				</Text>

			</View>
			<View style={styles.roles}>
				<AnimatedIcon 
					name="role" 
					role={"P"} 
					animation={"opacity"} 
					duration={2000} 
					delay={0} 
					numOfReps={-1} />
				<AnimatedIcon 
					name="role" 
					role={"D"} 
					animation={"opacity"} 
					duration={2000} 
					delay={1500} 
					numOfReps={-1} />
				<AnimatedIcon 
					name="role" 
					role={"C"} 
					animation={"opacity"} 
					duration={2000} 
					delay={3000} 
					numOfReps={-1} />
				<AnimatedIcon 
					name="role" 
					role={"A"} 
					animation={"opacity"} 
					duration={2000} 
					delay={4500} 
					numOfReps={-1} />
						
			</View>
		</View>
	)
}

MarketOpponentTurn.propTypes = {

}

export default MarketOpponentTurn

