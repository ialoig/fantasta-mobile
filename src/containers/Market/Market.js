import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { View } from "react-native"
import { Button, Header } from "../../components"
import routes from "../../navigation/routesNames"
import { commonStyle } from "../../styles"

function Market(props) {


	const { goBack, navigate } = useNavigation()

	return (
		<View style={commonStyle.container}>
			<Button
				title={I18n.translate("join")}
				onPress={() => 
					navigate(routes.MARKET_OPEN_AUCTION, {
						id: "785",
						isClassic: true
					})}
				type={"primary"}
				size={"large"}
			/>

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

