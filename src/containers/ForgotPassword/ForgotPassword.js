import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import React, { useState } from "react"
import { Text, View } from "react-native"
import Validator from "validator"
import { Button, Email } from "../../components"
import routes from "../../navigation/routesNames"
import { Auth } from "../../services"
import { commonStyle, textStyles } from "../../styles"
import styles from "./styles"


function ForgotPassword() {

	const { navigate } = useNavigation()
	const [email, setEmail] = useState(null)
	const [error, setError] = useState(null)

	function changeEmail(id, value) {
		if (!value) {
			setError(true)
		}
		setEmail(value)
	}

	async function forgot() {

		if (!email || !Validator.isEmail(email)) {
			setError(true)
			return
		}

		try {
			await Auth.forgot(email)
			navigate(routes.FORGOT_PASSWORD_CONFIRMATION)
		}
		catch (error) {
			//managed on services/auth.js
			console.log(`error: ${error}`)
		}
	}

	return (
		<View style={[commonStyle.container, commonStyle.flex_start]}>

			<Text style={[styles.haveAccount, textStyles.button]} >
				{I18n.translate("forgot_password_explanation")}
			</Text>

			<Email
				label={I18n.translate("email")}
				placeholder={I18n.translate("email")}
				showError={error}
				required={true}
				clearButtonMode='while-editing'
				onChange={(id, value) => changeEmail(id, value)}
			/>

			<Button
				title={I18n.translate("send")}
				onPress={() => forgot()}
				type='primary'
				size='large'
			/>
		</View>
	)
}

export default ForgotPassword


