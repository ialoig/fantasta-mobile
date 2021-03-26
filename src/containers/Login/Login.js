
import I18n from "i18n-js"
import React from "react"
import { Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback, View } from "react-native"

import { Button, Email, Logo, Password } from "../../components"
import { commonStyle, textStyles } from "../../styles"
import colors from "../../styles/colors"
import { ios } from "../../utils/deviceUtils"
import styles from "./styles"


const Login = (props) => { 
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
					<Text style={styles.forgot} onPress={() => props.ForgotPassword()}>
						{I18n.translate("forgotPassword")}
					</Text>
					<Button
						title={I18n.translate("login")}
						onPress={props.Login}
						type='primary'
						size='large'
					/>
					<Text style={[styles.haveAccount, textStyles.button]} onPress={() => props.Register()}>
						{I18n.translate("noAccount")}{I18n.translate("register")}
					</Text>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default Login


