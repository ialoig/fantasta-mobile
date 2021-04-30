
import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import routes from "../../navigation/routesNames"
import Error from "../Error/Error"

function ResetPasswordError({ route }) {

	const { navigate } = useNavigation()

	const { title, message } = route.params

	function goToForgotPassword() {
		return navigate(routes.FORGOT_PASSWORD)
	}

	return (
		<Error
			title={title}
			description={message}
			buttonText={I18n.translate("forgotPassword")}
			buttonOnPress={goToForgotPassword}
		/>
	)
}

ResetPasswordError.propTypes = {
	route: PropTypes.object.isRequired
}

ResetPasswordError.defaultProps = {
	route: {}
}

export default ResetPasswordError
