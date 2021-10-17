import { useNavigation } from "@react-navigation/native"
import PropTypes from "prop-types"
import React from "react"
import { View } from "react-native"
import { Header } from "../../components"
import { commonStyle } from "../../styles"

function Market(props) {


	const { goBack } = useNavigation()


	return (
		<View style={commonStyle.container}>
			
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

