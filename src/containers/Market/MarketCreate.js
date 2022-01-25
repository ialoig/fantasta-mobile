import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { Text, View } from "react-native"
import { Button, Header } from "../../components"
import Icon from "../../components/Icon/Icon"
import { textStyles } from "../../styles"
import styles from "./styles"



function MarketCreate() {

	const { goBack } = useNavigation()

	

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
					onPress={() => console.log("market create")}
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
