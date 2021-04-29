
import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import React from "react"
import routes from "../../navigation/routesNames"
import Confirmation from "../Confirmation/Confirmation"

function ForgotPasswordConfirmation() {

	const { navigate } = useNavigation()

	function goToLogin() {
		return navigate(routes.LOGIN)
	}

	return (
		<Confirmation
			title={I18n.translate("confirmation_forgot_password_title")}
			description={I18n.translate("confirmation_forgot_password_description")}
			buttonText={I18n.translate("ok")}
			buttonOnPress={goToLogin}
		/>
	)
}

export default ForgotPasswordConfirmation
