import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { View } from "react-native"
import { Card } from "../../../components"
import { commonStyle } from "../../../styles"
import styles from "../styles"

function Settings(props) {
    
    
	return (
		<View style={commonStyle.container}>
			<View style={styles.cardContent}>
				{ /** language */}
				<Card
					onPress={props.onPressLanguage}
					title={I18n.translate("language")}
					description=""
					type='small'
					arrow={true}
				/>
			</View>
		</View>
	)
}


Settings.propTypes = {
	onPressLanguage: PropTypes.func.isRequired
}


export default Settings