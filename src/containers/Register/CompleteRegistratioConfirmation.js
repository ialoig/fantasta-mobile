
import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import React from "react"
import Result from "../../components/Result/Result"
import routes from "../../navigation/routesNames"

function CompleteRegistratioConfirmation() {

	const { navigate } = useNavigation()

	function goToLogin() {
		return navigate(routes.GETSTARTED)
	}

	return (
		<Result
			title={I18n.translate("complete_register_confirm")}
			description={I18n.translate("complete_register_confirm_desc")}
			iconType={"confirm"}
			buttonText={I18n.translate("continue")}
			buttonOnPress={goToLogin}
		/>
	)
}

export default CompleteRegistratioConfirmation
