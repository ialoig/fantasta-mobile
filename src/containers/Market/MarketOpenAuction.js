import { useRoute } from "@react-navigation/core"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { PlayerCard } from "../../components"
import { Players } from "../../services"
import styles from "./styles"

function MarketOpenAuction() {


	const { params } = useRoute()
	//get player object from route params
	const playerID = params?.id
	//get league type
	const isClassic = params?.isClassic
	//player object found by ID passed by props
	const [player, setPlayer] = useState(Players.GetPlayersByID(playerID))


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
			</ScrollView>
		</View>
	)
}

MarketOpenAuction.propTypes = {

}

export default MarketOpenAuction

