import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Text, View } from "react-native"
import { Button, Header } from "../../components"
import Icon from "../../components/Icon/Icon"
import { User } from "../../services"
import { textStyles } from "../../styles"
import MarketMyTurn from "./MarketMyTurn"
import MarketOpponentTurn from "./MarketOpponentTurn"
import MarketWaitingRoom from "./MarketWaitingRoom"
import styles from "./styles"
function Market({ marketOpen, marketJoined, joinMarketRoom, onlinePlayersMarket, marketStart, marketTurnUser }) {

	const { goBack } = useNavigation()

	const MarketNotActive = () => {
		return (
			<View style={styles.image} >
				<Icon name={"transfer"} width={120} height={120} />
				<Text style={textStyles.h2}>
					{I18n.translate("market_not_open")}
				</Text>
				<Text style={[textStyles.h3, styles.textDescription]}>
					{I18n.translate("market_not_open_descr")}
				</Text>
			</View>
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

	const myTurn = () => { 
		// TODO: sometimes appear
		// marketTurnUser=undefined
		// User.get().username=user04
		// myTurn=false
		console.log(`marketTurnUser=${marketTurnUser}`)
		console.log(`User.get().username=${User.get().username}`)
		console.log(`myTurn=${marketTurnUser == User.get().username}`)
		return marketTurnUser == User.get().username
	}

	return (
		<View style={styles.container}>
			{
				!marketOpen && <MarketNotActive />
			}

			{
				marketOpen && !marketJoined && <MarketActive />
			}

			{
				marketOpen && marketJoined && !marketStart && <MarketWaitingRoom onlinePlayersMarket={onlinePlayersMarket}/>
			}

			{
				marketOpen && marketJoined && marketStart && myTurn() && <MarketMyTurn />
			}

			{
				marketOpen && marketJoined && marketStart && !myTurn() && <MarketOpponentTurn />
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

}

export default Market
