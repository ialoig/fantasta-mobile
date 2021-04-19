import { useNavigation } from "@react-navigation/core"
import I18n from "i18n-js"
import React, {  useState } from "react"
import { View } from "react-native"
import validator from "validator"
import { Button, Password, RepeatPassword } from "../../../../components"
import { FIELDS_ID, PASSWORD_OPT } from "../../../../constants"
import routes from "../../../../navigation/routesNames"
import { Auth } from "../../../../services"
import { commonStyle } from "../../../../styles"

function PasswordSettings() {

	//hook which give access to the navigation object from the component directly
	const { navigate }  = useNavigation()

	const [password1, setPassword1] = useState(null)
	const [password2, setPassword2] = useState(null)
	const [showError, setShowError] = useState(false)
	
	const onPress = async() => {
		if (!password1 || !validator.isStrongPassword(password1, PASSWORD_OPT)) {
			setShowError(true)
			return
		}

		if (password1 != password2) {
			setShowError(true)
			return
		}

		try {
			await Auth.update(null, null, password1) 
			navigate(routes.ACCOUNT_DETAILS)
		} catch (error) {
			console.log("[PasswordSettings] handleOnPress - error:" +error)
			return setShowError(true)
		}
	}

	return (
		<View style={[commonStyle.container, commonStyle.flex_start]}>
			<Password
				id={FIELDS_ID.passwordId}
				label={I18n.translate("password")}
				placeholder={I18n.translate("password")}
				showError={showError}
				required={true}
				minLength={6}
				clearButtonMode='never'
				onChange={(id, value) => setPassword1(value)}
			/>
			<RepeatPassword
				id={FIELDS_ID.repeatPasswordId}
				label={I18n.translate("repeatPassword")}
				placeholder={I18n.translate("repeatPassword")}
				password={password1}
				showError={showError}
				required={true}
				minLength={6}
				clearButtonMode='never'
				onChange={(id, value) => setPassword2(value)}
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


export default PasswordSettings
