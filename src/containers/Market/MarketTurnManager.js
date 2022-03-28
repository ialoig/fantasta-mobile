import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import Icon from "../../components/Icon/Icon"
import { Leagues, User } from "../../services"
import { commonStyle, textStyles } from "../../styles"
import MarketMyTurn from "./MarketMyTurn"
import MarketOpponentTurn from "./MarketOpponentTurn"
import styles from "./styles"

function MarketTurnManager({ marketTeamTurn, marketOpen }) {

	const myTeam = Leagues.getMyTeam(User.get().username)

	// TODO: useful to manage team rotation on marketTeamTurn array
	const [turnIndex, setTurnIndex] = useState(0)

	const [myTurn, setMyTurn] = useState(false)
	const [teamTurn, setTeamTurn] = useState()
	
	useEffect( () => {
		console.log("[MarketTurnManager] marketTeamTurn: %s", marketTeamTurn)
		setMyTurn(isMyTurn())
		getTeamTurn()
	}, [marketTeamTurn])

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
			
			// TODO: add admin page to get next football player when acution type is RANDOM or ALPHABETICAL
			// next player button will emit a new event FOOTBALL_PLAYER_SELECTED_RANDOM to server
			// server will calculate a new football player and a bet (initial player evaluation or 1 based on league settings) and will send the message
			// SERVER.MARKET.FOOTBALL_PLAYER_SELECTED_RANDOM
			// show waiting page for others participants (not admin)


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
				myTurn && teamTurn && <MarketMyTurn />
			}
			{
				!myTurn && teamTurn && <MarketOpponentTurn team={teamTurn} />
			}
		</View>
	)
}

MarketTurnManager.propTypes = {
	marketTeamTurn: PropTypes.arrayOf(PropTypes.string),
	marketOpen: PropTypes.bool,
}

export default MarketTurnManager

