import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import React, { useState } from "react"
import { Text, View } from "react-native"
import Validator from "validator"
import { Auth, Error } from "../../services"
import { Button, Email, Logo } from "../../components"
import { commonStyle, textStyles } from "../../styles"
import styles from "./styles"
import Icon from "../../components/Icon/Icon"


function ForgotPasswordConfirmation() {

	const { navigate } = useNavigation()
	const [email, setEmail] = useState(null)
	const [error, setError] = useState(null)

	function changeEmail(id, value) {
		if (!value) {
			setError(true)
		}
		setEmail(value)
	}

	const forgot = async () => {

		console.log(`========== forgot()`)

		if (!email || !Validator.isEmail(email)) {
			setError(true)
			return
		}

		try {
			console.log(`========== 111`)
			let res = await Auth.forgot(email)
			console.log(`========== 222`)

			Error.showAlert("Email inviata", "Controlla nella posta in arrivo")
			this.props.navigation.navigate(routes.LOGIN)
		}
		catch (error) {
			//managed on services/auth.js
			console.log(`error: ${error}`)
		}
	}

	return (
		<View style={[commonStyle.container, commonStyle.flex_start]}>
			{/* <Logo /> */}
			<View style={styles.image}>
				<Icon name={"check"} />
			</View>

			{/* <Text style={[styles.haveAccount, textStyles.button]} >
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
			/> */}
		</View>
	)
}

export default ForgotPasswordConfirmation


