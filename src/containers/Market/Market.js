import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { Text, View } from "react-native"
import { Button, Header } from "../../components"
import Icon from "../../components/Icon/Icon"
import routes from "../../navigation/routesNames"
import { textStyles } from "../../styles"
import styles from "./styles"

function Market({ marketOpen }) {

	const { goBack } = useNavigation()

	//should be used to define when a market window is open.
	//to be defined correctly when implementing events

	return (
		<View style={styles.container}>
			{
				!marketOpen && <MarketNotActive />
			}

			{
				marketOpen && <MarketActive />
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



function MarketNotActive() {
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

function MarketActive() {

	const { navigate } = useNavigation()

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
					// onPress={() => 
					// 	navigate(routes.MARKET_OPEN_AUCTION, {
					// 		id: "785",
					// 		isClassic: true
					// 	})}
					onPress={() => navigate(routes.MARKET_MY_TURN)}
					type={"primary"}
					size={"large"}
				/>
			</View>
		</>
	)
} 