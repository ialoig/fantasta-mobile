
import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import React from "react"
import Result from "../../components/Result/Result"
import routes from "../../navigation/routesNames"

function ForgotPasswordConfirmation() {

	const { navigate } = useNavigation()

	function goToLogin() {
		return navigate(routes.LOGIN)
	}

	return (
		<Result
			title={I18n.translate("confirmation_forgot_password_title")}
			description={I18n.translate("confirmation_forgot_password_description")}
			iconType={"send"}
			buttonText={I18n.translate("ok")}
			buttonOnPress={goToLogin}
		/>
	)
}

export default ForgotPasswordConfirmation
