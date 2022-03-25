import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { ScrollView, Text, View } from "react-native"
import { Button } from "../../components"
import AuctionCard from "../../components/Card/AuctionCard/AuctionCard"
import Icon from "../../components/Icon/Icon"
import useAdmin from "../../hooks/useAdmin"
import { Leagues } from "../../services"
import { SocketManager } from "../../services/socket"
import { commonStyle, textStyles } from "../../styles"
import styles from "./styles"

const socket = SocketManager.getSocketInstance()
const ioClient = socket.ioClient

 
function MarketWaitingRoom({ marketOnlineTeams }) {

	const [teams, setTeams] = useState(Leagues.getTeams())
	const isAdmin = useAdmin()

	useEffect(() => {
		setTeams(Leagues.getTeams())
	}, [teams])

	const marketStart = () => {
		ioClient.emit(SocketManager.EVENT_TYPE.CLIENT.MARKET.ACTIVE, (response) => {
			console.log("[MarketWaitingRoom] [marketStart] status: %s", response.status)
			console.log("[MarketWaitingRoom] [marketStart] error?: %s", JSON.stringify(response.error))
			// TODO: check response OK from server
		})
	}

	return (
		<View style={[styles.container, commonStyle.paddingHeader]}>

			<View style={styles.image} >
				<Icon name={"waiting"} width={120} height={120} />
				<Text style={textStyles.h2}>
					{I18n.translate("market_waiting_room_descr")}
				</Text>
			</View>

			<View style={styles.teamList}>

				<Text style={[textStyles.h3, styles.textDescription]}>
					{`Online ${marketOnlineTeams.length}/${teams.length}`}
				</Text>

				<ScrollView showsVerticalScrollIndicator={false} >
					{
						teams?.map(team => {
							const isUserOnline = marketOnlineTeams.find(t => t.team_id === team._id) ? true : false

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

			{/* button Start is shown when all participants are online. Visible only for admin */}
			{
				isAdmin && marketOnlineTeams.length == teams.length &&
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
	marketOnlineTeams: PropTypes.array,
}

export default MarketWaitingRoom

