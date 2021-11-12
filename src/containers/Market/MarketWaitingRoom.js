import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Text, View } from "react-native"
import AuctionCard from "../../components/Card/AuctionCard/AuctionCard"
import Icon from "../../components/Icon/Icon"
import { Leagues } from "../../services"
import { textStyles } from "../../styles"
import styles from "./styles"

function MarketWaitingRoom(props) {

	const [teams, setTeams] = useState(Leagues.getTeams())


	return (
		<View style={styles.container}>
			<View style={styles.image} >
				<Icon name={"waiting"} width={120} height={120} />
				<Text style={textStyles.h2}>
					{I18n.translate("market_waiting_room_descr")}
				</Text>
			</View>
			
			{
				teams?.map( team => {
					return (
						<AuctionCard 
							key={team}
							name={team}
							description={I18n.translate("online")}//TODO: to change when event implemented
							highlight={true}//should be true when user is online
						/>
					)
				})
			}

		</View>
	)
}

MarketWaitingRoom.propTypes = {

}

export default MarketWaitingRoom

