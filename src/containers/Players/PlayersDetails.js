import { useIsFocused, useRoute } from "@react-navigation/native"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { Text, View } from "react-native"
import { PlayerCard } from "../../components"
import { textStyles } from "../../styles"
import styles from "./styles"

function PlayersDetails() {

	const { params } = useRoute()
	//define if page is focused or not
	const isFocused = useIsFocused()

	useEffect(() => {
		console.log("[PlayersDetails] - params=", params.player)
	}, [isFocused])

	return (

		<View style={styles.container}>
			<PlayerCard
				type="large" 
				player={params.player} 
			/>

			{/* statistics */}
			<View>
				<Text style={textStyles.h1}>{I18n.translate("statistics")}</Text>
			</View>

		</View>
	)
}

PlayersDetails.propTypes = {

}

export default PlayersDetails

