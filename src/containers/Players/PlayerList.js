import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"
import { Animated, FlatList, Text, View } from "react-native"
import { PlayerCard } from "../../components"
import routes from "../../navigation/routesNames"
import { textStyles } from "../../styles"
import styles from "./styles"

const FlatListAnimated = Animated.createAnimatedComponent(FlatList)


function PlayerList({ players, isClassic, onScroll, snapSize, translateY }) {

	//navigation route
	const { navigate }  = useNavigation()

	const ref = useRef(null)

	useEffect(() => {
		if (ref.current) {
			ref.current.scrollToIndex(
				{ 
					index: 0,
					animated: true
				})
		}
	}, [players])


	//snap header view to a value when scroll goes up or down, 
	//avoiding to show search button when scroll stops in middle values of scrollY 
	//snaps values are:
	//0 : starting position
	//-68: final position when search button is not shown
	const handleSnap = ({ nativeEvent }) => {
		const offsetY = nativeEvent.contentOffset.y
		const absValue = Math.abs(translateY.current)
		if (absValue >0 && absValue < snapSize) {
			//when scroll goes up and exceeds half of the search button size
			if (absValue >= (snapSize / 2)) {
				ref.current.scrollToOffset({
					offset: offsetY + (snapSize),
					animated: true
				})
			} 
			//starting condition
			else {
				ref.current.scrollToOffset({
					offset: 0,
					animated: true
				})
			}
		}
	}


	return (
		<Animated.View style={styles.list}>
			{
				players &&
			<FlatListAnimated 
				ref={ref}
				onScroll={onScroll}
				data={players}
				keyExtractor={player => player.id.toString()}
				initialScrollIndex={0}
				scrollEventThrottle={16}
				onScrollEndDrag={handleSnap}
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
}

PlayerList.propTypes = {
	players: PropTypes.array,
	isClassic: PropTypes.bool,
	onScroll: PropTypes.object,
	snapSize: PropTypes.number,
	translateY: PropTypes.object
}

export default PlayerList

