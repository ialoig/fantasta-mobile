import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Leagues, User } from "../../services"
import MarketMyTurn from "./MarketMyTurn"
import MarketOpponentTurn from "./MarketOpponentTurn"

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
		const isMyTurn = myTeam._id == marketTeamTurn[turnIndex]
		console.log("[MarketTurnManager] [isMyTurn] Is %s turn ? %s", myTeam.name, isMyTurn)
		return isMyTurn
	}

	const getTeamTurn = () => {
		const teamTurnID = marketTeamTurn[turnIndex]
		const team = Leagues.getTeamByID(teamTurnID)
		console.log("[MarketTurnManager] [getTeamTurn] Team is: %s", team)
		setTeamTurn(team)
	}


	return (
		<>
			{
				myTurn && <MarketMyTurn />
			}
			{
				!myTurn && teamTurn && <MarketOpponentTurn team={teamTurn} />
			}
		</>
	)
}

MarketTurnManager.propTypes = {
	marketTeamTurn: PropTypes.arrayOf(PropTypes.string),
	marketOpen: PropTypes.bool,
}

export default MarketTurnManager

