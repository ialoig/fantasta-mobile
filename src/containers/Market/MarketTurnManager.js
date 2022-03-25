import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Leagues, User } from "../../services"
import MarketMyTurn from "./MarketMyTurn"
import MarketOpponentTurn from "./MarketOpponentTurn"

function MarketTurnManager({ marketTeamTurn }) {

	const [myTeam, setMyTeam] = useState(Leagues.getMyTeam(User.get().username))
	const [turnIndex, setTurnIndex] = useState(0)
	const [myTurn, setMyTurn] = useState(false)
	
	useEffect( () => {
		console.log("[MarketTurnManager] marketTeamTurn: %s", marketTeamTurn)
		setMyTurn(isMyTurn())
	}, [marketTeamTurn])

	const isMyTurn = () => {
		const isMyTurn = myTeam._id == marketTeamTurn[turnIndex]
		console.log("[MarketTurnManager] [isMyTurn] Is %s turn ? %s", myTeam.name, isMyTurn)
		return isMyTurn
	}


	return (
		<>
			{
				myTurn && <MarketMyTurn />
			}
			{
				!myTurn && <MarketOpponentTurn />
			}
		</>
	)
}

MarketTurnManager.propTypes = {
	marketTeamTurn: PropTypes.arrayOf(PropTypes.string)
}

export default MarketTurnManager

