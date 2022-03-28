import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { Text, View } from "react-native"
import { Button, Header } from "../../components"
import Icon from "../../components/Icon/Icon"
import useAdmin from "../../hooks/useAdmin"
import { textStyles } from "../../styles"
import MarketCreate from "./MarketCreate"
import MarketTurnManager from "./MarketTurnManager"
import MarketWaitingRoom from "./MarketWaitingRoom"
import styles from "./styles"
function Market({
	marketJoined,
	marketOnlineTeams,
	marketOpen,
	marketActive,
	marketTeamTurn,
	createMarket,
	joinMarketRoom
}) {

	const { goBack } = useNavigation()

	console.log("============")
	console.log(`[Market] - page - marketJoined=${marketJoined}`)
	console.log(`[Market] - page - marketOnlineTeams=${JSON.stringify(marketOnlineTeams)}`)
	console.log(`[Market] - page - marketOpen=${marketOpen}`)
	console.log(`[Market] - page - marketActive=${marketActive}`)
	console.log(`[Market] - page - marketTeamTurn=${JSON.stringify(marketTeamTurn)}`)
	console.log("============")

	const isAdmin = useAdmin()

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


	return (
		<View style={styles.container}>
			{
				!marketOpen && isAdmin && 
				<MarketCreate 
					createMarket={createMarket} 
				/>
			}
			{
				!marketOpen && !isAdmin && <MarketNotActive />
			}

			{
				marketOpen && !marketJoined && <MarketActive />
			}

			{
				marketOpen && marketJoined && !marketActive && 
				<MarketWaitingRoom 
					marketOnlineTeams={marketOnlineTeams} 
				/>
			}

			{
				marketOpen && marketJoined && marketActive && 
				<MarketTurnManager 
					marketTeamTurn={marketTeamTurn} 
					marketOpen={marketOpen}
				/>
			}


			{/* it has been defined as last component because it have to be seen over the others */}
			<Header
				title="market"
				leftButton
				iconTypeLeft="back"
				onPressLeft={() => goBack()}
			/>
		</View>
	)
}

Market.propTypes = {
	marketOpen: PropTypes.bool,
	marketJoined: PropTypes.bool,
	joinMarketRoom: PropTypes.func,
	marketOnlineTeams: PropTypes.array,
	marketActive: PropTypes.bool,
	marketTeamTurn: PropTypes.object,
	createMarket: PropTypes.func
}

export default Market
