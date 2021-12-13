import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Text, View } from "react-native"
import { Button, Header } from "../../components"
import Icon from "../../components/Icon/Icon"
import { textStyles } from "../../styles"
import MarketWaitingRoom from "./MarketWaitingRoom"
import styles from "./styles"
function Market({ marketOpen, marketJoined, joinMarketRoom, onlinePlayersMarket }) {

	const { goBack } = useNavigation()


	//should be used to define when a market window is open.
	//to be defined correctly when implementing events

	console.log(`BEFORE marketOpen=${marketOpen}`)
	console.log(`BEFORE marketJoined=${marketJoined}`)
	console.log(`BEFORE onlinePlayersMarket=${onlinePlayersMarket}`)

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

	console.log(`marketOpen=${marketOpen}`)
	console.log(`marketJoined=${marketJoined}`)

	return (
		<View style={styles.container}>
			{
				!marketOpen && <MarketNotActive />
			}

			{
				marketOpen && !marketJoined && <MarketActive />
			}

			{
				marketOpen && marketJoined && <MarketWaitingRoom onlinePlayersMarket={onlinePlayersMarket}/>
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
