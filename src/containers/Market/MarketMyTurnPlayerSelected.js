import { useNavigation, useRoute } from "@react-navigation/core"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { Badge, Button, PlayerCard } from "../../components"
import AuctionCard from "../../components/Card/AuctionCard/AuctionCard"
import Countdown from "../../components/Countdown/Countdown"
import NumberInc from "../../components/Inputs/NumberInc/NumberInc"
import routes from "../../navigation/routesNames"
import { Leagues, Players, User } from "../../services"
import { colors, textStyles } from "../../styles"
import styles from "./styles"

function MarketMyTurnPlayerSelected(props) {

	const { goBack, navigate } = useNavigation()
	const { params } = useRoute()
	//get player object from route params
	const playerID = params?.id
	//get league type
	const isClassic = params?.isClassic
	//player object found by ID passed by props
	const [player, setPlayer] = useState(Players.getPlayersByID(playerID))
	const [sessionValue, setSessionValue] = useState(1)
	const [team, setTeam] = useState(Leagues.getMyTeam(User.get().username))

	useEffect(() => {
		const myTeam = Leagues.getMyTeam(User.get().username)
		setTeam(myTeam)

	}, [])


	// TODO: ⚠️  when pressed, coundown is restarted. 
	// Also auction bid list looks as a new bid has been sent (animation of the top bid).
	// need an analysis after event service implementation
	const incrementSessionValue = (value) => {
		setSessionValue(prevValue => {
			return prevValue + value
		})
		console.log("[MarketMyTurnPlayerSelected - incrementSessionValue] - setSessionValue:", sessionValue)
	}


	const resetSessionValue = () => {
		setSessionValue(1)
		console.log("[MarketMyTurnPlayerSelected - resetSessionValue] - setSessionValue:", sessionValue)
	}

	const bet = () => {
		console.log("[MarketMyTurnPlayerSelected - bet] - value:", sessionValue)
		const localBid = {
			_id: team._id,
			name: team.name,
			value: sessionValue
		}
		
		return navigate(routes.MARKET_OPEN_AUCTION, {
			id: playerID,
			isClassic: isClassic,
			bid: localBid
		})
	}


	return (
		<View style={styles.container}>

			<View style={styles.countdown_container}>
				<Text style={textStyles.h2}>
					{I18n.translate("auction_countdown_start")}
				</Text>
				<Countdown 
					minutes={0}
					seconds={10}
					type={"default"}
				/>
			</View>

			<View >
				<Text style={textStyles.h2}>
					{I18n.translate("player_selected")}
				</Text>

				<PlayerCard
					type="auction"
					name={player.name}
					isClassic={isClassic}
					roles={isClassic ?  [...player.roleClassic] : player.roleMantra}
					team={player.team}
					quotation={player.initialPrice}
					bid={sessionValue ? sessionValue : 1}
				/>
			</View>

			{/* buttons */}
			<View style={styles.badge} >
				<Badge 
					title={"CLEAR"}
					onPress={() => resetSessionValue()}
					active={true}
					activeColor={colors.errorRed}
				/>
				<Badge 
					title={"+1"}
					onPress={() => incrementSessionValue(1)}
					active={true}
					activeColor={colors.primary}
				/>
				<Badge 
					title={"+5"}
					onPress={() => incrementSessionValue(5)}
					active={true}
					activeColor={colors.primary}
				/>
				<Badge 
					title={"+10"}
					onPress={() => incrementSessionValue(10)}
					active={true}
					activeColor={colors.primary}
				/>
			</View>
			<View>
				<NumberInc
					label={I18n.translate("your_bid")}
					value={sessionValue}
					step={1}
					min={0}
					onChange={(value) => setSessionValue(value)}
				/>
			</View>
			<View style={styles.button}>
				<Button 
					title={I18n.translate("leave")}
					size={"small"}
					type={"secondary"}
					border={true}
					onPress={() => goBack()}
				/>
				<Button 
					title={I18n.translate("bet") + " " + sessionValue}
					size={"small"}
					type={"primary"}
					onPress={() => bet()}
				/>
			</View>

		</View>
	)
}

MarketMyTurnPlayerSelected.propTypes = {

}

export default MarketMyTurnPlayerSelected

