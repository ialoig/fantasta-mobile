import { useRoute } from "@react-navigation/core"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Text, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { PlayerCard } from "../../components"
import { Players } from "../../services"
import { colors, textStyles } from "../../styles"
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

				<View style={styles.countdown_container}>
					<Text style={textStyles.h2}>
						{I18n.translate("auction_countdown")}
					</Text>
					<View style={styles.countdown}>
						<Text style={[textStyles.title, styles.countdown_text]}>
							{"00"}
						</Text>
					</View>
					<View style={styles.countdown}>
						<Text style={[textStyles.title, styles.countdown_text]}>
							{"00"}
						</Text>
					</View>
				</View>

				<PlayerCard
					type="auction"
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

