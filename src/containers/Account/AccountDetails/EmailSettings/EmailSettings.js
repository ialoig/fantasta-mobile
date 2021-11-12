import { useIsFocused, useNavigation } from "@react-navigation/core"
import I18n from "i18n-js"
import React, { useEffect, useState } from "react"
import { View } from "react-native"
import validator from "validator"
import { Button, Email } from "../../../../components"
import routes from "../../../../navigation/routesNames"
import { Auth, User } from "../../../../services"
import { commonStyle } from "../../../../styles"

function EmailSettings() {

	//hook which give access to the navigation object from the component directly
	const { navigate }  = useNavigation()
	const isFocused = useIsFocused()

	const [email, setEmail] = useState(User.get().email)
	const [newEmail, setNewEmail] = useState(null)
	const [showError, setShowError] = useState(false)


	useEffect( () => {
		setEmail(User.get().email)
	}, [email, isFocused])

	
	const onPress = async() => {
		if ( !newEmail || !validator.isEmail(newEmail) ) {
			setShowError(true)
		}

		try {
			await Auth.update(newEmail, null)    
			navigate(routes.ACCOUNT_DETAILS)
		} catch (error) {
			console.log("[EmailSettings] handleOnPress - error:" +error)
			return setShowError(true)
		}
	}


	return (
		<View style={[commonStyle.container, commonStyle.flex_start]}>
			<Email
				id={"newEmail"}
				label={I18n.translate("email")}
				value={email}
				placeholder={""}
				showError={showError}
				required={true}
				clearButtonMode='while-editing'
				onChange={(id, value) => setNewEmail(value)}
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

export default EmailSettings
