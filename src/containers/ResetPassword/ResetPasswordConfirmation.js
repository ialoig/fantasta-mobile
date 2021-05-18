
import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import React from "react"
import Result from "../../components/Result/Result"
import routes from "../../navigation/routesNames"

function ResetPasswordConfirmation() {

	const { navigate } = useNavigation()

	function goToLogin() {
		return navigate(routes.LOGIN)
	}

	return (
		<Result
			title={I18n.translate("confirmation_reset_password_title")}
			description={I18n.translate("confirmation_reset_password_description")}
			iconType={"confirm"}
			buttonText={I18n.translate("login")}
			buttonOnPress={goToLogin}
		/>
	)
}

export default ResetPasswordConfirmation
