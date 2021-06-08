import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { Button, Email, Logo, Password, RepeatPassword } from "../../components"
import { commonStyle, textStyles } from "../../styles"
import styles from "./styles"


const Register = (props) => {
	
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={commonStyle.container}>
				<Logo horizontal/>
				<KeyboardAwareScrollView 
					showsVerticalScrollIndicator={false}
				>
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
						{I18n.translate("haveAccount")}
						<Text style={ textStyles.title}>{I18n.translate("login")}</Text>
					</Text>
				</KeyboardAwareScrollView>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default Register


Register.propTypes = {
	emailId: PropTypes.string.isRequired,
	passwordId: PropTypes.string.isRequired,
	repeatPasswordId: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	showError: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
	Register: PropTypes.func.isRequired,
	login: PropTypes.func.isRequired
}