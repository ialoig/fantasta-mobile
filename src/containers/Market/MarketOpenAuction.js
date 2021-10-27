import { useRoute } from "@react-navigation/core"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { PlayerCard } from "../../components"
import AuctionCard from "../../components/Card/AuctionCard/AuctionCard"
import Countdown from "../../components/Countdown/Countdown"
import { Players } from "../../services"
import { textStyles } from "../../styles"
import AuctionBidList from "./AuctionBidList"
import styles from "./styles"

function MarketOpenAuction() {


	const { params } = useRoute()
	//get player object from route params
	const playerID = params?.id
	//get league type
	const isClassic = params?.isClassic
	//player object found by ID passed by props
	const [player, setPlayer] = useState(Players.GetPlayersByID(playerID))

	const bids = [
		{
			id: 1,
			name: "Team Pippo",
			bid: "100"
		},
		{
			id: 2,
			name: "Team B",
			bid: "20"
		},
		{
			id: 3,
			name: "Team C",
			bid: "30"
		},
	]

	return (
		<View style={styles.container}>

			<View style={styles.countdown_container}>
				<Text style={textStyles.h2}>
					{I18n.translate("auction_countdown")}
				</Text>
				<Countdown 
					minutes={0}
					seconds={10}
					restart={Math.random()}
				/>
			</View>

			<PlayerCard
				type="auction"
				name={player.name}
				isClassic={isClassic}
				roles={isClassic ?  [...player.roleClassic] : player.roleMantra}
				team={player.team}
				quotation={player.initialPrice}
				bid={0} //TODO: set current bid based on bids coming from auction
			/>

			<AuctionBidList 
				bids={bids}
			/>

		</View>
	)
}

MarketOpenAuction.propTypes = {

}

export default MarketOpenAuction