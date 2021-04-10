
import I18n from "i18n-js"
import React from "react"
import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

import { Button, Email, Logo } from "../../components"
import { commonStyle, textStyles } from "../../styles"
import styles from "./styles"


const Forgot = (props) => {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={commonStyle.container}>
				<Logo />
				<KeyboardAwareScrollView
					showsVerticalScrollIndicator={false}
				>
					<Text style={[styles.haveAccount, textStyles.button]} >
						{I18n.translate("forgot_password_explanation")}
					</Text>
					<Email
						id={props.emailId}
						label={I18n.translate("email")}
						placeholder={I18n.translate("email")}
						showError={props.showError}
						required={true}
						clearButtonMode='while-editing'
						onChange={props.onChange}
					/>
					<Button
						title={I18n.translate("retrieve_password")}
						onPress={props.Forgot}
						type='primary'
						size='large'
					/>
				</KeyboardAwareScrollView>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default Forgot


