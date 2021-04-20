
import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import React, { useState } from "react"
import { Text, View, TextInput } from "react-native"
import { Button, Logo, Password, RepeatPassword } from "../../components"
import routes from "../../navigation/routesNames"
import { Auth } from "../../services"
import { commonStyle, textStyles, inputStyle } from "../../styles"
import Validator from "validator"
import { PASSWORD_OPT } from "../../constants"
import styles from "./styles"

function ResetPassword({ route }) {

	const { email } = route.params

	//hook which give access to the navigation object from the component directly
	const { navigate } = useNavigation()

	const [password, setPassword] = useState(null)
	const [repeatPassword, setRepeatPassword] = useState(null)
	const [error, setError] = useState(null)

	function changePassword(id, value) {
		if (!value) {
			setError(true)
		}
		setPassword(value)
	}

	function changeRepeatPassword(id, value) {
		if (!value) {
			setError(true)
		}
		setRepeatPassword(value)
	}

	function reset() {
		console.log(`email: ${email}`)
		console.log(`password: ${password}`)
		console.log(`repeatPassword: ${repeatPassword}`)

		if (!email || !Validator.isEmail(email)) {
			setError(true)
			return
		}

		if (!password || !Validator.isStrongPassword(password, PASSWORD_OPT)) {
			setError(true)
			return
		}

		if (password != repeatPassword) {
			setError(true)
			return
		}

		if (email && password && password == repeatPassword) {
			try {
				// let res = await Auth.Register(email, password) // todo: reset API
				setError(false)
				navigate(routes.LOGIN)
			}
			catch (error) {
				//todo: remove this useless try/catch
				//managed on services/auth.js
			}
		}
	}


	return (
		<View style={[commonStyle.container, commonStyle.flex_start]}>

			<Logo />

			<View style={styles.container}>
				<TextInput
					style={[textStyles.body, inputStyle.inputForm]}
					value={email}
					editable={false}
					selectTextOnFocus={false}
				/>
			</View>

			<Password
				label={I18n.translate("password")}
				placeholder={I18n.translate("password")}
				showError={error}
				required={true}
				minLength={6}
				clearButtonMode='never'
				onChange={(id, value) => changePassword(id, value)}
			/>

			<RepeatPassword
				label={I18n.translate("repeatPassword")}
				placeholder={I18n.translate("repeatPassword")}
				password={password}
				showError={error}
				required={true}
				minLength={6}
				clearButtonMode='never'
				onChange={(id, value) => changeRepeatPassword(id, value)}
			/>

			<Button
				title={I18n.translate("resetPassword")}
				onPress={() => reset()}
				type='primary'
				size='large'
			/>
		</View>
	)
}

export default ResetPassword
