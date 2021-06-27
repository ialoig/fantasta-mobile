import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"
import { FlatList, Text, View } from "react-native"
import { PlayerCard } from "../../components"
import routes from "../../navigation/routesNames"
import { textStyles } from "../../styles"
import styles from "./styles"

function PlayerList({ players, isClassic }) {

	//navigation route
	const { navigate }  = useNavigation()

	const ref = useRef(null)

	useEffect(() => {
		if (ref.current) {
			ref.current.scrollToIndex({ animated: true, index: 0 })
		}
	}, [players])

	return (
		<View style={styles.list}>
			{
				players &&
			<FlatList 
				ref={ref}
				data={players}
				keyExtractor={player => player.id.toString()}
				initialScrollIndex={0}
				renderItem={(player) => 
					<PlayerCard
						type="small"
						name={player.item.name}
						isClassic={isClassic}
						roles={isClassic ?  [...player.item.roleClassic] : player.item.roleMantra}
						team={player.item.team}
						quotation={player.item.initialPrice}
						onPress={() => 
							navigate(routes.PLAYER_DETAILS, {
								id: player.item.id,
								isClassic: isClassic
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
			}
		</View>
	)
}

PlayerList.propTypes = {
	players: PropTypes.array,
	isClassic: PropTypes.bool
}

export default PlayerList

