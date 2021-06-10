import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Pressable, Text, View } from "react-native"
import { ROLE_CLASSIC_DISPLAY_LONG, ROLE_CLASSIC_DISPLAY_SHORT } from "../../constants"
import { textStyles } from "../../styles"
import Icon from "../Icon/Icon"
import { size, style } from "./styles"


const playerCardType = ["default", "small", "large"]


const PlayerCard = ({ type, player, onPress }) => {

	const [playerInfo, setPlayerInfo] = useState("")
	const [playerInfoPrice, setPlayerInfoPrice] = useState("")

	useEffect(() => {
		defineCardType()
	}, [])


	//setting player information based on card type passed by props
	const defineCardType = () => {
		switch(type) {
		case "small":
			setPlayerInfo(ROLE_CLASSIC_DISPLAY_SHORT[player.roleClassic] + " - " +player.team)
			break
		case "large":
			setPlayerInfo(player.team+ " - " + ROLE_CLASSIC_DISPLAY_LONG[player.roleClassic])
			setPlayerInfoPrice(I18n.translate("initial_evaluation"))
			break
		default:
			setPlayerInfo(player.team+ " - " + ROLE_CLASSIC_DISPLAY_LONG[player.roleClassic])
			break
		}
	}

	return (
		<Pressable onPress={onPress} style={[style.card, size[type], style[type]]}>

			<View style={style.player}>
				<Icon name="role" role={player.roleClassic} />
				<View style={style.playerInfo}>
					<Text style={textStyles.title}>{player.name}</Text>
					{playerInfo ? <Text style={textStyles.description}>{playerInfo}</Text> : null}
				</View>
			</View>
			
			{
				type === "large" &&
				<View style={style.separator}>
					<Icon name="separator" />
					<Text style={textStyles.h3}>{playerInfoPrice}</Text>
					<Text style={textStyles.title}>{player.initialPrice}
						<Text style={textStyles.buttonXSmall}>{" fm"}</Text>
					</Text>
				</View>
			}

			{ 
				type === "small" &&
				<View style={style.arrow}>
					<Icon name="forward" />
				</View>
			}
		</Pressable>
	)
}

PlayerCard.propTypes = {
	player: PropTypes.object.isRequired,
	type: PropTypes.oneOf([...Object.values(playerCardType)]).isRequired,
	onPress: PropTypes.func
}

export default PlayerCard