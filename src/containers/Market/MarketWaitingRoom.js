import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { Text, View } from "react-native"
import Icon from "../../components/Icon/Icon"
import { textStyles } from "../../styles"
import styles from "./styles"

function MarketWaitingRoom(props) {
    
	return (
		<View style={styles.container}>
			<View style={styles.image} >
				<Icon name={"waiting"} width={120} height={120} />
				<Text style={textStyles.h2}>
					{I18n.translate("market_waiting_room_descr")}
				</Text>
			</View>

		</View>
	)
}

MarketWaitingRoom.propTypes = {

}

export default MarketWaitingRoom

