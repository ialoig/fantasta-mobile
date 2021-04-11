import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { Text } from "react-native"
import routes from "../../navigation/routesNames"
import { textStyles } from "../../styles"

function HeaderTitle({ children }) {

	//TODO: gl - valutare possibilita di scorrere una mappa con tutte le routes ed impostare il titolo 
	//dell'header in maniera più furba
	const title = (children) => {
		switch(children) {
		case routes.ACCOUNT:
			return I18n.translate("account")
		case routes.SETTINGS:
			return I18n.translate("settings")
		case routes.SUPPORT:
			return I18n.translate("support")
		case routes.ACCOUNT_DETAILS:
			return I18n.translate("account_details")
		case routes.EMAIL_SETTINGS:
			return I18n.translate("change_email")
		case routes.USERNAME_SETTINGS:
			return I18n.translate("change_username")
		case routes.DELETE_ACCOUNT:
			return I18n.translate("delete_account")
		case routes.LANGUAGE:
			return I18n.translate("language")
		case routes.FEEDBACK:
			return I18n.translate("feedback")
		case routes.CONTACTUS:
			return I18n.translate("contact")
		case routes.COMPLETE_REGISTER:
			return I18n.translate("complete_register")
		case routes.HOME:
			return I18n.translate("start_league")
		case routes.CREATE_LEAGUE:
			return I18n.translate("createLeague")
		case routes.JOIN_LEAGUE:
			return I18n.translate("joinLeague")
		default:
			return children
		}
	}


	return (
		<Text style={textStyles.h1}>{title(children)}</Text>
	)
}

HeaderTitle.propTypes = {
	children: PropTypes.string.isRequired
}

export default HeaderTitle

