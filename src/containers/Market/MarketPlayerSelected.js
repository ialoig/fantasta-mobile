import { useRoute } from "@react-navigation/core"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Text, View } from "react-native"
import { PlayerCard } from "../../components"
import AuctionCard from "../../components/Card/AuctionCard/AuctionCard"
import Countdown from "../../components/Countdown/Countdown"
import { Players } from "../../services"
import { textStyles } from "../../styles"
import styles from "./styles"

function MarketPlayerSelected(props) {

	const { params } = useRoute()
	//get player object from route params
	// const playerID = params?.id ? params.id : "785" //TODO: should be passed player id by props
	const playerID = "785"
	//get league type
	const isClassic = true //TODO: should be passed if league is classic or not by props
	//player object found by ID passed by props
	const [player, setPlayer] = useState(Players.getPlayersByID(playerID))


	return (
		<View style={styles.container}>

			<View style={styles.countdown_container}>
				<Text style={textStyles.h2}>
					{I18n.translate("auction_countdown_start")}
				</Text>
				<Countdown 
					minutes={0}
					seconds={10}
					type={"default"}
				/>
			</View>

			<View >
				<Text style={textStyles.h2}>
					{I18n.translate("player_selected")}
				</Text>

				<PlayerCard
					type="auction"
					name={player.name}
					isClassic={isClassic}
					roles={isClassic ?  [...player.roleClassic] : player.roleMantra}
					team={player.team}
					quotation={player.initialPrice}
				// bid={bestBid?.value ? bestBid.value : 0} //TODO: set current bid based on starting value choose by owner
				/>

				<AuctionCard 
					name={"team"}
					bid={100}
					type={"large"}
				/>
			</View>

		</View>
	)
}

MarketPlayerSelected.propTypes = {

}

export default MarketPlayerSelected

