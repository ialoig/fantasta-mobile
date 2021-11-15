
import { useIsFocused, useNavigation } from "@react-navigation/core"
import Costants from "expo-constants"
import I18n from "i18n-js"
import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { Button, Card } from "../../components"
import routes from "../../navigation/routesNames"
import { Token, User } from "../../services"
import { commonStyle, textStyles } from "../../styles"
import styles from "./styles"

function Account () {

	const { navigate } = useNavigation()
	const isFocused = useIsFocused()
	const [email, setEmail] = useState(User.get().email)
	const [username, setUsername] = useState(User.get().email)


	useEffect( () => {
		setEmail(User.get().email)
		setUsername(User.get().username)
	}, [email, username, isFocused])

	
	const logout = () => {
		User.remove()
		Token.remove()
		navigate(routes.LOGIN)
	}


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
					icon="account"
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
				onPress={logout}
				type={"primary"}
				size={"large"}
			/>
			<Text style={[styles.version, textStyles.description]}>
				{"App version: " + Costants.manifest.version}
			</Text>
		</View>
	)
}


export default Account
