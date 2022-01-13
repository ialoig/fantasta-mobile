import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { ScrollView, Text, View } from "react-native"
import { Button } from "../../components"
import AuctionCard from "../../components/Card/AuctionCard/AuctionCard"
import Icon from "../../components/Icon/Icon"
import { Leagues } from "../../services"
import { SocketManager } from "../../services/socket"
import { textStyles } from "../../styles"
import styles from "./styles"

const socket = SocketManager.getSocketInstance()
const ioClient = socket.ioClient

function MarketWaitingRoom({ onlinePlayersMarket }) {

	const [teams, setTeams] = useState(Leagues.getTeams())

	useEffect(() => {
		setTeams(Leagues.getTeams())
	}, [teams])

	const marketStart = () => {
		ioClient.emit(SocketManager.EVENT_TYPE.CLIENT.MARKET.START, (response) => {
			console.log(`callbak.response.status: ${response.status}`)
			console.log(`callback.response.error: ${JSON.stringify(response.error, null, 2)}`)
			// TODO: check response OK from server
		})
	}

	return (
		<View style={styles.container}>

			<View style={styles.image} >
				<Icon name={"waiting"} width={120} height={120} />
				<Text style={textStyles.h2}>
					{I18n.translate("market_waiting_room_descr")}
				</Text>
			</View>

			<View style={styles.teamList}>

				<Text style={[textStyles.h3, styles.textDescription]}>
					{`Online ${onlinePlayersMarket.length}/${teams.length}`}
				</Text>

				<ScrollView showsVerticalScrollIndicator={false} >
					{
						teams?.map(team => {
							const isUserOnline = onlinePlayersMarket.find(user => user === team.user.name) ? true : false

							return (
								<AuctionCard
									key={team._id}
									name={team.name}
									description={I18n.translate(isUserOnline ? "online" : "offline")}//TODO: to change when event implemented
									highlight={isUserOnline}//should be true when user is online
								/>
							)
						})
					}
				</ScrollView>
			</View>

			{
				onlinePlayersMarket.length == teams.length &&
				<View style={styles.joinButton}>
					<Button
						title={I18n.translate("Start")}
						onPress={() => marketStart()}
						type={"primary"}
						size={"large"}
					/>
				</View>
			}

		</View>
	)
}

MarketWaitingRoom.propTypes = {

}

export default MarketWaitingRoom

