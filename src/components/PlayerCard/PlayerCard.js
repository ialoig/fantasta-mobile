import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import Card from "../Card/Card"


const PlayerCard = ({ type, player }) => {

	const [cardType, setCardType] = useState("")
	const [playerInfo, setPlayerInfo] = useState("")

	useEffect(() => {
		return defineCardType()
	}, [])



	//setting player information based on card type passed by props
	const defineCardType = () => {
		switch(type) {
		case "details-small":
			setCardType("small")
			setPlayerInfo(player.initialPrice)
			break
		case "details-large":
			return setCardType("large")
		default:
			return setCardType("small")
		}
	}

	return (
		<Card 
			icon="role"
			role={player.roleClassic}
			title={player.name}
			description={playerInfo}
			type={cardType}
			arrow={cardType==="small" ? true : false}
		/>
	)
}

PlayerCard.propTypes = {
	player: PropTypes.object.isRequired,
	type: PropTypes.oneOf(["details-small", "details-large"]).isRequired
}

export default PlayerCard