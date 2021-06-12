import { useRoute } from "@react-navigation/native"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
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
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.statistics}>
				
					{/* statistics sx*/}
					<View>
						<StatsCard 
							type="small"
							value1={player.initialPrice}
							desc1={I18n.translate("initial_price")}
						/>
						<StatsCard 
							type="small"
							value1={player.actualPrice}
							desc1={I18n.translate("actual_price")}
						/>
					</View>


					{/* field svg */}
					<Icon name="field_role" role={player.roleClassic} />

					{/* statistics dx*/}
					<View>
						<StatsCard 
							type="small"
							value1={playerStats.mv}
							desc1={I18n.translate("media_voto")}
						/>
						<StatsCard 
							type="small"
							value1={playerStats.mf}
							desc1={I18n.translate("fanta_media")}
						/>
					</View>

				</View>

				<View style={styles.statistics}>
					<StatsCard 
						type="large"
						value1={playerStats.pg}
						desc1={I18n.translate("partite_giocate")}
						value2={playerStats.gf}
						desc2={I18n.translate("goal")}
						value3={playerStats.ass}
						desc3={I18n.translate("assist")}
						value4={playerStats.asf}
						desc4={I18n.translate("assist_fermo")}
					/>
				</View>

				<View style={styles.statistics}>
					<StatsCard 
						type="large"
						value1={playerStats.amm}
						desc1={I18n.translate("ammonizioni")}
						value2={playerStats.esp}
						desc2={I18n.translate("espulsioni")}
						value3={playerStats.au}
						desc3={I18n.translate("autogol")}
					/>
				</View>
			</ScrollView>
		</View>
	)
}

PlayersDetails.propTypes = {

}

export default PlayersDetails

