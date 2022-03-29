import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { View } from "react-native"
import { AUCTION_TYPE } from "../../constants"
import { Leagues, User } from "../../services"
import { commonStyle } from "../../styles"
import MarketMyTurn from "./MarketMyTurn"
import MarketOpponentTurn from "./MarketOpponentTurn"
import MarketPlayerSelectedRandom from "./MarketPlayerSelectedRandom"
import styles from "./styles"

function MarketTurnManager({ marketTeamTurn, marketOpen }) {

	const myTeam = Leagues.getMyTeam(User.get().username)

	const [myTurn, setMyTurn] = useState(false)
	const [teamTurn, setTeamTurn] = useState()

	// get active league and get auction type of the league
	const league = Leagues.getActiveLeague()
	const isRandom = (league.auctionType == AUCTION_TYPE.RANDOM || league.auctionType == AUCTION_TYPE.ALPHABETIC) ? true : false

	
	useEffect( () => {
		console.log("[MarketTurnManager] [useEffect] League %s has football player selection random? %s", league.name, isRandom)
		if (!isRandom) {
			console.log("[MarketTurnManager] [useEffect] marketTeamTurn: %s", marketTeamTurn)
			setMyTurn(isMyTurn())
			getTeamTurn()
		}
	}, [])

	const isMyTurn = () => {
		const isMyTurn = myTeam._id == marketTeamTurn.team_id
		console.log("[MarketTurnManager] [isMyTurn] Is %s turn ? %s", myTeam.name, isMyTurn)
		return isMyTurn
	}

	const getTeamTurn = () => {
		const team = Leagues.getTeamByID(marketTeamTurn.team_id)
		console.log("[MarketTurnManager] [getTeamTurn] Team is: %s", team)
		setTeamTurn(team)
	}


	return (
		<View style={[styles.container, commonStyle.paddingHeader]}>

			{/* 
			{ 
				!teamTurn && 
				<View style={styles.image} >
				<Icon name={"waiting"} width={120} height={120} />
				<Text style={textStyles.h2}>
				{I18n.translate("market_waiting_team_turn")}
				</Text>
				</View>
			} */}

			{
			// TODO: add admin page to get next football player when auction type is RANDOM or ALPHABETICAL
			// next player button will emit a new event FOOTBALL_PLAYER_SELECTED_RANDOM to server
			// server will calculate a new football player and a bet (initial player evaluation or 1 based on league settings) and will send the message
			// SERVER.MARKET.FOOTBALL_PLAYER_SELECTED_RANDOM
			// show waiting page for others participants (not admin)
				isRandom && <MarketPlayerSelectedRandom/>
			}
			
			{
				myTurn && teamTurn && <MarketMyTurn />
			}
			{
				!myTurn && teamTurn && <MarketOpponentTurn team={teamTurn} />
			}
		</View>
	)
}

MarketTurnManager.propTypes = {
	marketTeamTurn: PropTypes.object,
	marketOpen: PropTypes.bool,
	isAdmin: PropTypes.bool
}

export default MarketTurnManager

