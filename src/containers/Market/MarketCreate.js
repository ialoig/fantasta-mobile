import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { Text, View } from "react-native"
import { Button, Header } from "../../components"
import Icon from "../../components/Icon/Icon"
import routes from "../../navigation/routesNames"
import { MarketStatus } from "../../services/market"
import { SocketManager } from "../../services/socket"
import { textStyles } from "../../styles"
import styles from "./styles"

// TODO: should be centralized to get the Socket instance from everywhere
const socket = SocketManager.getSocketInstance()
const ioClient = socket.ioClient

function MarketCreate() {

	const { goBack, navigate } = useNavigation()

	useEffect(() => {
		const market = MarketStatus.get()
		console.log("[MarketCreate - useEffect] market: ", market)
	}, [])
	

	const createMarket = () => {
		const market = MarketStatus.get()

		// setting market as OPEN
		MarketStatus.setOpen()
		console.log("[MarketCreate - useEffect] isOpen: ", market.open)

		// emit event Market is OPEN
		ioClient.emit(SocketManager.EVENT_TYPE.CLIENT.LEAGUE.MARKET_OPEN, (response) => {
			console.log(`callbak.response.status: ${response.status}`)
			console.log(`callback.response.error: ${JSON.stringify(response.error, null, 2)}`)
		})
		// return to Market page. Passing 'marketOpen' as prop ??
		navigate(routes.MARKET)
	}
	

	return (
		<View style={styles.container}>
			<View style={styles.image} >
				<Icon name={"market"} width={120} height={120} />
				<Text style={textStyles.h2}>
					{I18n.translate("market_create")}
				</Text>
				<Text style={[textStyles.h3, styles.textDescription]}>
					{I18n.translate("market_create_descr")}
				</Text>
			</View>
			<View style={styles.joinButton}>
				<Button
					title={I18n.translate("create")}
					onPress={() => createMarket()}
					type={"primary"}
					size={"large"}
				/>
			</View>

			{/* it has been defined as last component because it have to be seen over the others */}
			<Header 
				title="MarketCreate" 
				leftButton
				iconTypeLeft="back"
				onPressLeft={() => goBack() }
			/>
		</View>
	)
}

MarketCreate.propTypes = {
}

export default MarketCreate
