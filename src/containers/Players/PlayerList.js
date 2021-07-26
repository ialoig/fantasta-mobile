import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { Text } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import Animated from "react-native-reanimated"
import { PlayerCard } from "../../components"
import routes from "../../navigation/routesNames"
import { textStyles } from "../../styles"
import styles from "./styles"

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)


const PlayerList = React.forwardRef(({ players, isClassic, onScroll, onScrollEnd }, ref ) => {

	//navigation route
	const { navigate }  = useNavigation()

	return (
		<Animated.View style={styles.list}>
			{
				players &&
			<AnimatedFlatList
				ref={ref}
				data={players}
				keyExtractor={player => player.id.toString()}
				initialScrollIndex={0}
				scrollEventThrottle={16} //fire onScroll event each 16ms
				onScroll={onScroll}
				onMomentumScrollEnd={onScrollEnd}
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
		</Animated.View>
	)
})
PlayerList.displayName = "PlayerList"

PlayerList.propTypes = {
	players: PropTypes.array,
	isClassic: PropTypes.bool,
	onScroll: PropTypes.object,
	onScrollEnd: PropTypes.func
}

export default PlayerList

