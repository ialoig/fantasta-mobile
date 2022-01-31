import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { Button, Header } from "../../components"
import Icon from "../../components/Icon/Icon"
import useAdmin from "../../hooks/useAdmin"
import useMarketOpen from "../../hooks/useMarketOpen"
import { Leagues, User } from "../../services"
import { MarketStatus } from "../../services/market"
import { textStyles } from "../../styles"
import MarketCreate from "./MarketCreate"
import MarketMyTurn from "./MarketMyTurn"
import MarketOpponentTurn from "./MarketOpponentTurn"
import MarketWaitingRoom from "./MarketWaitingRoom"
import styles from "./styles"
function Market({ 
	marketOpen,
	marketJoined, 
	joinMarketRoom, 
	onlinePlayersMarket, 
	marketActive, 
	marketTurnUser 
}) {

	const { goBack } = useNavigation()

	// const marketStatus = MarketStatus.get()
	// const [marketOpen, setMarketOpen] = useState(marketStatus.open)

	const isAdmin = useAdmin()
	// const isMarketOpen = useMarketOpen()
	let isMarketOpen = marketOpen

	const MarketNotActive = () => {
		return (
			<>
				<View style={styles.image} >
					<Icon name={"transfer"} width={120} height={120} />
					<Text style={textStyles.h2}>
						{I18n.translate("market_not_open")}
					</Text>
					<Text style={[textStyles.h3, styles.textDescription]}>
						{I18n.translate("market_not_open_descr")}
					</Text>
				</View>
			</>
		)
	}
	
	const MarketActive = () => {
		return (
			<>
				<View style={styles.image} >
					<Icon name={"market"} width={120} height={120} />
					<Text style={textStyles.h2}>
						{I18n.translate("market_open")}
					</Text>
					<Text style={[textStyles.h3, styles.textDescription]}>
						{I18n.translate("market_open_descr")}
					</Text>
				</View>
				<View style={styles.joinButton}>
					<Button
						title={I18n.translate("join")}
						onPress={joinMarketRoom}
						type={"primary"}
						size={"large"}
					/>
				</View>
			</>
		)
	}

	// const isAdmin = () => {
	// 	const user = User.get()
	// 	const admin = Leagues.getAdmin()
	// 	console.log("[Market] - actual user: %s, admin is: %s", user.username, admin.name)
	// 	return user.id === admin._id
	// }

	const myTurn = () => { 
		// TODO: sometimes appear
		// marketTurnUser=undefined
		// User.get().username=user04
		// myTurn=false
		console.log(`[Market] - marketTurnUser=${marketTurnUser}`)
		console.log(`[Market] - User.get().username=${User.get().username}`)
		console.log(`[Market] - myTurn=${marketTurnUser == User.get().username}`)
		return marketTurnUser == User.get().username
	}

	return (
		<View style={styles.container}>
			{
				!isMarketOpen && isAdmin && <MarketCreate />
			}
			{
				!isMarketOpen && !isAdmin && <MarketNotActive />
			}

			{
				isMarketOpen && !marketJoined && <MarketActive />
			}

			{
				isMarketOpen && marketJoined && !marketActive && <MarketWaitingRoom onlinePlayersMarket={onlinePlayersMarket}/>
			}

			{
				isMarketOpen && marketJoined && marketActive && myTurn() && <MarketMyTurn />
			}

			{
				isMarketOpen && marketJoined && marketActive && !myTurn() && <MarketOpponentTurn />
			}


			{/* it has been defined as last component because it have to be seen over the others */}
			<Header 
				title="market" 
				leftButton
				iconTypeLeft="back"
				onPressLeft={() => goBack() }
			/>
		</View>
	)
}

Market.propTypes = {
	marketOpen: PropTypes.bool,
	marketJoined: PropTypes.bool,
	joinMarketRoom: PropTypes.func,
	onlinePlayersMarket: PropTypes.array,
	marketActive: PropTypes.bool,
	marketTurnUser: PropTypes.array
}

export default Market
