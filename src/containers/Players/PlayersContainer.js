import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import { View } from "react-native"
import { Header } from "../../components"
import PlayersComp from "../../components/Players/PlayersComp"
import { Players } from "../../services"
import { commonStyle } from "../../styles"
import styles from "./styles"


function PlayersContainer() {

	//define list of players to show
	const [players, setPlayers] = useState([])
	//navigation route
	const { goBack }  = useNavigation()

	
	useEffect( () => {
		defaultList()
	}, [])


	const defaultList = () => {
		//get players from api
		const apiPlayers = Players.GetPlayers()
		let players = Object.values(apiPlayers)
		
		//setting all players retrieved from api
		setPlayers(players)
	}


	return (
		<View style={[styles.container, commonStyle.paddingHeader]}>

			{/* Rendering list of players */ }
			<PlayersComp 
				players={players}
			/>
			
			{/* it is defined as latest component cause it must be over the others */}
			<Header 
				title="players" 
				leftButton
				iconTypeLeft="back"
				onPressLeft={() => goBack() }
			/>

		</View>
	)
}


export default PlayersContainer