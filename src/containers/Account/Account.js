
import { useNavigation, useRoute } from "@react-navigation/native"
import Costants from "expo-constants"
import I18n from "i18n-js"
import React from "react"
import { Text, View } from "react-native"

import { Button, Card } from "../../components"
import routes from "../../navigation/routesNames"
import { Token, User } from "../../services"

import { commonStyle, textStyles } from "../../styles"
import styles from "./styles"

function Account () {

	//hook which give access to the navigation object from the component directly
	const { navigate } = useNavigation()
	const route = useRoute()
	const { email, username } = route.params

	return (
		<View style={commonStyle.container}>

			<View style={commonStyle.flex}>
				{ /** account */}
				<Card 
					onPress={() => navigate(routes.ACCOUNT_DETAILS)}
					title={username}
					description={email}
					type='default'
					arrow={false}
					icon={require("../../../assets/img/icons/user_50.png")}
				/>
				{ /** settings */}
				<Card
					onPress={() => navigate(routes.SETTINGS)}
					title={I18n.translate("settings")}
					description={I18n.translate("settings_descr")}
					type='small'
					arrow={true}
				/>

				{ /** support */}
				<Card 
					onPress={() => navigate(routes.SUPPORT)}
					title={I18n.translate("support")}
					type='small'
					arrow={true}
				/>
			</View>

			<Button
				title={I18n.translate("logout")}
				onPress={ () => {
					User.remove()
					Token.remove()
					navigate("Login")
				}}
				type='primary'
				size='large'
			/>
			<Text style={[styles.version, textStyles.description]}>
				{"App version: " + Costants.manifest.version}
			</Text>
		</View>
	)
}

export default Account
