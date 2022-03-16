import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { FlatList, Text, View } from "react-native"
import routes from "../../navigation/routesNames"
import { Players } from "../../services"
import { textStyles } from "../../styles"
import TeamCard from "../Card/TeamCard/TeamCard"
import styles from "./styles"


const TeamList = ({ league, teams, update, onScroll, onScrollEnd }) => {

	//navigation route
	const { navigate }  = useNavigation()

	console.log("[TeamList - props] - League name: %s, n. Teams: %s, Update flag: %s", league.name, teams.length, update)


	//TODO: to be deleted after calculation of players from team object
	const randomNumberFromRange = (min, max) => {
		return Math.round(Math.random() * (max-min+1) + min )
	}

	//TODO: just for debug, replace with the correct players calculated from team object (ie. team.footballPlayers)
	const getRandomPlayers = () => {
		//get players from api
		const apiPlayers = Object.values(Players.getPlayers())
		let size = apiPlayers.length
		const players = []
		const indexes = []
		for (let i = 0; i<randomNumberFromRange(25, 25); i++) {
			const random = Math.random()
			const randomIndex = Math.round(random * size)
			if (indexes.find(item => item === randomIndex)) {
				continue
			} else {
				indexes.push(randomIndex)
			}
			
			players.push(apiPlayers[randomIndex])
		}
		size = players.length
		// console.log("[TeamList - getRandomPlayers] - size", size)
		return players
	}


	const counts = (players) => {
		return players.reduce((accumulator, currentValue) => {
			var role = currentValue?.roleClassic
			if (!accumulator[role]) {
				accumulator[role] = 0
			}
			accumulator[role]++
			return accumulator
		}, {})
	}

	const maxPerRole = {
		"P": league.goalkeepers,
		"D": league.defenders,
		"C": league.midfielders,
		"A": league.strikers
	}


	const renderItem = ({ item }) => {
		console.log("[TeamList - renderItem] - Item ID: %s, Item name: %s", item._id, item.name)

		// const players = item.footballPlayers
		
		const players = getRandomPlayers()
		const countsPerRole = counts(players)

		return (		
			<TeamCard 
				key={item._id}
				name={item.name}
				budget={item.budget}
				countsPerRole={countsPerRole}
				maxPerRole={maxPerRole}
				onPress={() => 
					navigate(routes.TEAM_DETAILS, {
						teamID: item._id,
					})}
			/>
		)
	}

	return (
		<View style={styles.list}>
			{
				teams &&
					<FlatList
						data={teams}
						extraData={update}
						keyExtractor={team => team._id}
						initialScrollIndex={0}
						scrollEventThrottle={16} //fire onScroll event each 16ms
						onScroll={onScroll}
						onMomentumScrollEnd={onScrollEnd}
						renderItem={renderItem}
						ListEmptyComponent={() => { 
							return (
								<Text style={textStyles.description}>
									{I18n.translate("noTeamsFound")}
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
}

TeamList.propTypes = {
	league: PropTypes.object.isRequired,
	teams: PropTypes.array.isRequired,
	update: PropTypes.number.isRequired,
	onScroll: PropTypes.object,
	onScrollEnd: PropTypes.func
}

export default TeamList

