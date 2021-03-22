
import { useNavigation, useRoute } from "@react-navigation/native"
import I18n from "i18n-js"
import React, { useState } from "react"
import { View } from "react-native"
import { Button, InputText } from "../../../components"
import routes from "../../../navigation/routesNames"
import { Auth } from "../../../services"

import { commonStyle } from "../../../styles"

function UsernameSettings() {

	//hook which give access to the navigation object from the component directly
	const { navigate } = useNavigation()
	const route = useRoute()
	//get username from route
	const { username } = route.params

	const [newUsername, setNewUsername] = useState(username)
	const [error, setError] = useState(false)

	return (
		<View style={[commonStyle.container, commonStyle.flex_start]}>
			<InputText
				id="name"
				label={I18n.translate("leagueName")}
				value={username}
				onChange={(id, value) => {
					setNewUsername(value)
				}}
			/>

			<Button
				title={I18n.translate("save")}
				onPress={
					async() => {
						if ( !newUsername ) {
							return setError(true)
						}

						try {
							await Auth.update(null, newUsername) 
							navigate(routes.ACCOUNT_DETAILS, {username: newUsername})
						} catch (error) {
							console.log("error:" +error)
						}
					}}
				type='primary'
				size='large'
			/>

		</View>
	)
}

export default UsernameSettings
