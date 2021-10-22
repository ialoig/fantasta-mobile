import I18n from "i18n-js"
import { isNil } from "lodash"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Pressable, Text, View } from "react-native"
import { ROLE_CLASSIC } from "../../../constants"
import { textStyles } from "../../../styles"
import Icon from "../../Icon/Icon"
import { size, style } from "./styles"


const playerCardType = ["default", "small", "large", "auction"]


const PlayerCard = ({ type, isClassic, name, roles, team, quotation, onPress }) => {

	const [playerInfo, setPlayerInfo] = useState("")
	const [playerInfoPrice, setPlayerInfoPrice] = useState("")
	const [playerAuctionPrice, setPlayerAuctionPrice] = useState("")

	useEffect(() => {
		//Classic roles
		if (isClassic) {
			const info = roles.map( (role) => {
				return ROLE_CLASSIC[role]
			})
			setPlayerInfo(info + " - " +team)
		}
		//Mantra roles
		else {
			setPlayerInfo(roles.join() + " - " +team)
		}
		defineCardType()
	}, [isClassic])


	//setting player information based on card type passed by props
	const defineCardType = () => {
		switch(type) {
		case "large":
			!isNil(quotation) ? setPlayerInfoPrice(I18n.translate("initial_price")) : null
			break
		case "auction":
			!isNil(quotation) ? setPlayerInfoPrice(I18n.translate("initial_price")) : null
			setPlayerAuctionPrice(I18n.translate("auction_price"))
			break
		default:
			break
		}
	}

	return (
		<Pressable onPress={onPress} style={[style.card, size[type], style[type]]}>

			<View style={style.player}>
				<Icon name="role" role={roles[0]} />
				<View style={style.playerInfo}>
					<Text style={textStyles.title}>{name}</Text>
					{playerInfo ? <Text style={textStyles.description}>{playerInfo}</Text> : null}
				</View>
			</View>
			
			{/** style definition when card is Large */}
			{
				type === "large" && !isNil(quotation) &&
				<View style={style.separator}>
					<Icon name="separator" />
					<Text style={textStyles.h3}>{playerInfoPrice}</Text>
					<Text style={textStyles.title}>{quotation}
						<Text style={textStyles.buttonXSmall}>{" fm"}</Text>
					</Text>
				</View>
			}

						
			{/** style definition when card is Auction */}
			{
				type === "auction" && !isNil(quotation) &&
				<View style={style.auction}>
					<Icon name="separator" />
					<View style={style.player_price}>
						<View style={style.player_initial_price}>
							<Text style={textStyles.h3}>{playerInfoPrice}</Text>
							<Text style={textStyles.title}>{quotation}
								<Text style={textStyles.buttonXSmall}>{" fm"}</Text>
							</Text>
						</View>
						<View style={style.auction_price}>
							<Text style={textStyles.h3}>{playerAuctionPrice}</Text>
							<Text style={textStyles.title}>{quotation}
								<Text style={textStyles.buttonXSmall}>{" fm"}</Text>
							</Text>
						</View>
					</View>
				</View>
			}

			{/** style definition when card is Small */}
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
	name: PropTypes.string.isRequired,
	isClassic: PropTypes.bool.isRequired,
	roles: PropTypes.array.isRequired,
	team: PropTypes.string.isRequired,
	quotation: PropTypes.number,
	type: PropTypes.oneOf([...Object.values(playerCardType)]).isRequired,
	onPress: PropTypes.func
}

export default PlayerCard