
import I18n from "i18n-js"
import React from "react"
import { Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback, View } from "react-native"

import { Button, Email, Logo, Password, RepeatPassword } from "../../components"
import { commonStyle, textStyles } from "../../styles"
import { ios } from "../../utils/deviceUtils"
import styles from "./styles"


const Register = (props) => {
	return (
		<KeyboardAvoidingView style={commonStyle.container}
			behavior={ios ? "padding" : undefined} >
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={commonStyle.content}>
					<Logo />
					<Email
						id={props.emailId}
						label={I18n.translate("email")}
						placeholder={I18n.translate("email")}
						showError={props.showError}
						required={true}
						clearButtonMode='while-editing'
						onChange={props.onChange}
					/>
					<Password
						id={props.passwordId}
						label={I18n.translate("password")}
						placeholder={I18n.translate("password")}
						showError={props.showError}
						required={true}
						minLength={6}
						clearButtonMode='never'
						onChange={props.onChange}
					/>
					<RepeatPassword
						id={props.repeatPasswordId}
						label={I18n.translate("repeatPassword")}
						placeholder={I18n.translate("repeatPassword")}
						password={props.password}
						showError={props.showError}
						required={true}
						minLength={6}
						clearButtonMode='never'
						onChange={props.onChange}
					/>
					<Button
						title={I18n.translate("register")}
						onPress={props.Register}
						type='primary'
						size='large'
					/>
					<Text style={[styles.haveAccount, textStyles.button]} onPress={() => props.login()}>
						{I18n.translate("haveAccount")}{I18n.translate("login")}
					</Text>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default Register
