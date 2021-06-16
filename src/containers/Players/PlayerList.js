import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { FlatList, Text, View } from "react-native"
import { PlayerCard } from "../../components"
import routes from "../../navigation/routesNames"
import { textStyles } from "../../styles"
import styles from "./styles"

function PlayerList({ players, isClassic }) {

	//navigation route
	const { navigate }  = useNavigation()


	return (
		<View style={styles.list}>
			<FlatList 
				data={players}
				keyExtractor={player => player.id.toString()}
				renderItem={(player) => 
					<PlayerCard
						type="small"
						name={player.item.name}
						role={isClassic ? player.item.roleClassic: player.item.roleMantra}
						team={player.item.team}
						quotation={player.item.initialPrice}
						onPress={() => 
							navigate(routes.PLAYER_DETAILS, {
								id: player.item.id
							})}
					/>
				}
				ListEmptyComponent={() => { 
					return (
						<Text style={textStyles.description}>
							{I18n.translate("noPlayersFound")}
						</Text>) 
				}}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	)
}

PlayerList.propTypes = {
	players: PropTypes.array,
	isClassic: PropTypes.bool
}

export default PlayerList

