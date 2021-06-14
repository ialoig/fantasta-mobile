import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { Button, Email, Logo, Password } from "../../components"
import { commonStyle, textStyles } from "../../styles"
import styles from "./styles"


const Login = (props) => { 
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={[commonStyle.container, styles.paddingTop]}>
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
						{I18n.translate("noAccount")}
						<Text style={ textStyles.title}>{I18n.translate("register")}</Text>
					</Text>
				</KeyboardAwareScrollView>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default Login


Login.propTypes = {
	emailId: PropTypes.string.isRequired,
	passwordId: PropTypes.string.isRequired,
	showError: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
	Login: PropTypes.func.isRequired,
	ForgotPassword: PropTypes.func.isRequired,
	Register: PropTypes.func.isRequired
}