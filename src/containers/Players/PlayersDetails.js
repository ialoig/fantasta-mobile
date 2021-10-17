import { useRoute } from "@react-navigation/native"
import I18n from "i18n-js"
import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { PlayerCard, StatsCard } from "../../components"
import Icon from "../../components/Icon/Icon"
import { Players } from "../../services"
import { textStyles } from "../../styles"
import styles from "./styles"

function PlayersDetails() {

	const { params } = useRoute()
	//get player object from route params
	const playerID = params?.id
	//get league type
	const isClassic = params?.isClassic
	//player object found by ID passed by props
	const [player, setPlayer] = useState(Players.GetPlayersByID(playerID))
	//player statistics object found by player ID passed by props
	const [playerStats, setPlayerStats] = useState(Players.GetStatisticsByPlayerID(playerID))

	useEffect(() => {
		console.log("[PlayersDetails - useEffect] - playerID=", playerID)
		const playerFound = Players.GetPlayersByID(playerID)
		console.log("[PlayersDetails - useEffect] - playerFound=", playerFound)
		setPlayer(playerFound)
		const statsFound = Players.GetStatisticsByPlayerID(playerID)
		console.log("[PlayersDetails - useEffect] - statsFound=", statsFound)
		setPlayerStats(statsFound)
	}, [playerID])


	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<PlayerCard
					type="large"
					name={player.name}
					isClassic={isClassic}
					roles={isClassic ?  [...player.roleClassic] : player.roleMantra}
					team={player.team}
					quotation={player.initialPrice}
				/>

				{/* statistics */}
				<Text style={textStyles.h1}>{I18n.translate("statistics")}</Text>
			
				<View style={styles.statistics}>
				
					{/* statistics sx*/}
					<View>
						<StatsCard 
							type="small"
							values={[player.initialPrice]}
							descriptions={[I18n.translate("initial_price")]}
						/>
						<StatsCard 
							type="small"
							values={[player.actualPrice]}
							descriptions={[I18n.translate("actual_price")]}
						/>
					</View>


					{/* field svg */}
					<Icon 
						name="field_role" 
						roles={isClassic ?  [...player.roleClassic] : player.roleMantra} 
					/>

					{/* statistics dx*/}
					<View>
						<StatsCard 
							type="small"
							values={[playerStats.mv]}
							descriptions={[I18n.translate("media_voto")]}
						/>
						<StatsCard 
							type="small"
							values={[playerStats.mf]}
							descriptions={[I18n.translate("fanta_media")]}
						/>
					</View>

				</View>

				<View style={styles.statistics}>
					<StatsCard 
						type="large"
						values={[
							playerStats.pg,
							player.roleClassic === "P" ? playerStats.gs : playerStats.gf,
							playerStats.ass,
							player.roleClassic === "P" ? playerStats.rp : playerStats["r+"] + "/" + playerStats.rc,
						]}
						descriptions={[
							I18n.translate("partite_giocate"),
							player.roleClassic === "P" ? I18n.translate("goal_subiti") : I18n.translate("goal"),
							I18n.translate("assist"),
							player.roleClassic === "P" ? I18n.translate("rigori_parati") : I18n.translate("rigori"),
						]}/>
				</View>

				<View style={styles.statistics}>
					<StatsCard 
						type="large"
						values={[
							playerStats.amm,
							playerStats.esp,
							playerStats.au
						]}
						descriptions={[
							I18n.translate("ammonizioni"),
							I18n.translate("espulsioni"),
							I18n.translate("autogol")
						]}
					/>
				</View>
			</ScrollView>
		</View>
	)
}

export default PlayersDetails
