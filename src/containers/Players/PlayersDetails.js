import { useRoute } from "@react-navigation/native"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { PlayerCard, StatsCard } from "../../components"
import { style } from "../../components/Card/styles"
import Icon from "../../components/Icon/Icon"
import { Players } from "../../services"
import { textStyles } from "../../styles"
import styles from "./styles"

function PlayersDetails() {

	const { params } = useRoute()
	//get player object from route params
	const playerID = params?.id
	//player object found by ID passed by props
	const [player, setPlayer] = useState(Players.GetPlayersByID(playerID))
	//player statistics object found by player ID passed by props
	const [playerStats, setPlayerStats] = useState(Players.GetStatisticsByPlayerID(playerID))

	useEffect(() => {
		console.log("[PlayersDetails] - [useEffect] - playerID=", playerID)
		const playerFound = Players.GetPlayersByID(playerID)
		console.log("[PlayersDetails] - [useEffect] - playerFound=", playerFound)
		setPlayer(playerFound)
		const statsFound = Players.GetStatisticsByPlayerID(playerID)
		console.log("[PlayersDetails] - [useEffect] - statsFound=", statsFound)
		setPlayerStats(statsFound)
	}, [playerID])


	return (

		<View style={styles.container}>
			<PlayerCard
				type="large"
				name={player.name}
				role={player.roleClassic}
				team={player.team}
				quotation={player.initialPrice}
			/>

			{/* statistics */}
			<Text style={textStyles.h1}>{I18n.translate("statistics")}</Text>
			<View style={styles.statistics}>
				<View style={styles.statistics_sx}>
					<StatsCard 
						type="small"
						number={player.initialPrice}
						description={I18n.translate("initial_price")}
					/>
					<StatsCard 
						type="small"
						number={player.actualPrice}
						description={I18n.translate("actual_price")}
					/>
				</View>
				<View style={styles.role}>
					<Icon name="field_role" />
				</View>
				<View style={styles.statistics_dx}>
					<StatsCard 
						type="small"
						number={playerStats.mv}
						description={I18n.translate("media_voto")}
					/>
					<StatsCard 
						type="small"
						number={playerStats.mf}
						description={I18n.translate("fanta_media")}
					/>
				</View>
			</View>

		</View>
	)
}

PlayersDetails.propTypes = {

}

export default PlayersDetails

