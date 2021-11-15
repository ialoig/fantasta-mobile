import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { ScrollView, Text, View } from "react-native"
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

			<View style={styles.teamList}>

				{/** TODO: calculate teams online vs offline */}
				<Text style={[textStyles.h3, styles.textDescription]}>
					{"Online 12/30"}
				</Text>

				<ScrollView showsVerticalScrollIndicator={false} >
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
				</ScrollView>
			</View>

		</View>
	)
}

MarketWaitingRoom.propTypes = {

}

export default MarketWaitingRoom

