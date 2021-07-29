import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { Text, View } from "react-native"
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


	const renderItem = ({ item }) => 
		(					
			<PlayerCard
				type="small"
				name={item.name}
				isClassic={isClassic}
				roles={isClassic ?  [...item.roleClassic] : item.roleMantra}
				team={item.team}
				quotation={item.initialPrice}
				onPress={() => 
					navigate(routes.PLAYER_DETAILS, {
						id: item.id,
						isClassic: isClassic
					})}
			/>
		)

	return (
		<View style={styles.list}>
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
				renderItem={renderItem}
				ListEmptyComponent={() => { 
					return (
						<Text style={textStyles.description}>
							{I18n.translate("noPlayersFound")}
						</Text>) 
				}}
				showsVerticalScrollIndicator={false}
				getItemLayout={(data, index) => (
					{ 
						length: 80, 
						offset: 80 * index, index
					}
				)}
			/>
			}
		</View>
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

