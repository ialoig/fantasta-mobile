import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { TextInput, View } from "react-native"
import Validator from "validator"
import { Button, Logo, Password, RepeatPassword } from "../../components"
import { PASSWORD_OPT } from "../../constants"
import routes from "../../navigation/routesNames"
import { Auth } from "../../services"
import { commonStyle, inputStyle, textStyles } from "../../styles"
import styles from "./styles"

function ResetPassword({ route }) {

	const { navigate } = useNavigation()

	const { email } = route.params

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

	async function reset() {
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
				await Auth.reset(email, password)
				navigate(routes.RESET_PASSWORD_CONFIRMATION)
			}
			catch (error) {
				console.log(`error: ${error}`)
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

ResetPassword.propTypes = {
	route: PropTypes.object.isRequired
}

ResetPassword.defaultProps = {
	route: {}
}

export default ResetPassword
