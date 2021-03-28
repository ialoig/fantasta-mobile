
import Costants from "expo-constants"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { Text, View } from "react-native"
import { Button, Card } from "../../components"
import { commonStyle, textStyles } from "../../styles"
import styles from "./styles"

function Account (props) {


	return (
		<View style={commonStyle.container}>

			<View style={commonStyle.flex}>
				{ /** account */}
				<Card 
					onPress={props.onPressAccountDetails}
					title={props.username}
					description={props.email}
					type='default'
					arrow={false}
					icon={"account"}
				/>
				{ /** settings */}
				<Card
					onPress={props.onPressSettings}
					title={I18n.translate("settings")}
					description={I18n.translate("settings_descr")}
					type='small'
					arrow={true}
				/>

				{ /** support */}
				<Card 
					onPress={props.onPressSupport}
					title={I18n.translate("support")}
					type='small'
					arrow={true}
				/>
			</View>

			<Button
				title={I18n.translate("logout")}
				onPress={props.logout}
				type='primary'
				size='large'
			/>
			<Text style={[styles.version, textStyles.description]}>
				{"App version: " + Costants.manifest.version}
			</Text>
		</View>
	)
}


Account.propTypes = {
	username: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	onPressAccountDetails: PropTypes.func.isRequired,
	onPressSettings: PropTypes.func.isRequired,
	onPressSupport: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired,
}

export default Account
