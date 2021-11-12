import { useIsFocused, useNavigation } from "@react-navigation/core"
import I18n from "i18n-js"
import React, { useEffect, useState } from "react"
import { View } from "react-native"
import { Button, InputText } from "../../../../components"
import routes from "../../../../navigation/routesNames"
import { Auth, User } from "../../../../services"
import { commonStyle } from "../../../../styles"

function UsernameSettings() {

	//hook which give access to the navigation object from the component directly
	const { navigate }  = useNavigation()
	const isFocused = useIsFocused()

	const [username, setUsername] = useState(User.get().username)
	const [newUsername, setNewUsername] = useState(null)
	const [showError, setShowError] = useState(false)


	useEffect( () => {
		setUsername(User.get().username)
	}, [username, isFocused])

	
	const onPress = async() => {
		if ( !newUsername ) {
			return setShowError(true)
		}

		try {
			await Auth.update(null, newUsername) 
			navigate(routes.ACCOUNT_DETAILS)
		} catch (error) {
			console.log("[UsernameSettings] handleOnPress - error:" +error)
			return setShowError(true)
		}
	}

	return (
		<View style={[commonStyle.container, commonStyle.flex_start]}>
			<InputText
				id={"newUsername"}
				label={I18n.translate("leagueName")}
				value={username}
				required={true}
				showError={showError}
				onChange={(id, value) => setNewUsername(value)}
			/>

			<Button
				title={I18n.translate("save")}
				onPress={onPress}
				type='primary'
				size='large'
			/>

		</View>
	)
}


export default UsernameSettings
