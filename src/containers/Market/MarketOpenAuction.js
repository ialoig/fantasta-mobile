import { useRoute } from "@react-navigation/core"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, {  useEffect, useState } from "react"
import { Text, View } from "react-native"
import { PlayerCard } from "../../components"
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
	const [bid, setBid] = useState()


	useEffect(() => {
		let interval = setInterval( () => {
			getRandomBids()
			
		}, 2000)

		return () => clearInterval(interval)

	}, [])


	const bids = [
		{
			id: Math.random(),
			name: "Team A",
			bid: "100"
		},
		{
			id: Math.random(),
			name: "Team B",
			bid: "15"
		},
		{
			id: Math.random(),
			name: "Team C",
			bid: "35"
		},
		{
			id: Math.random(),
			name: "Team D",
			bid: "201"
		},
		{
			id: Math.random(),
			name: "Team E",
			bid: "8"
		},
	]


	//TODO: to be deleted after bid implementation
	const randomNumberFromRange = (min, max) => {
		return Math.round(Math.random() * (max-min+1) + min )
	}
	
	//TODO: just for debug purpose.
	const getRandomBids = () => {
		const randomIndex = randomNumberFromRange(0, 3)
		console.log("[MarketOpenAuction - getRandomBids] - randomIndex", randomIndex)
		const selectedBid = bids[randomIndex]
		console.log("[MarketOpenAuction - getRandomBids] - selectedBid", selectedBid)
		setBid(selectedBid)
	}
	

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

			{
				bid && <AuctionBidList
					bid={bid}
				/>
			}

		</View>
	)
}

MarketOpenAuction.propTypes = {

}

export default MarketOpenAuction