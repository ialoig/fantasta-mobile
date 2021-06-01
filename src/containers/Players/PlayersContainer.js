import PropTypes from "prop-types"
import React from "react"
import { Text, View } from "react-native"
import { Players } from "../../services"
import { commonStyle } from "../../styles"

function PlayersContainer(props) {
	return (
		<View style={commonStyle.container}>
			<Text>Players</Text>
		</View>
	)
}

Players.propTypes = {

}

export default PlayersContainer

