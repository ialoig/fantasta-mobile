import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { View } from "react-native"
import { InputText } from "../../components"

const JoinLeague = (props) => {

	return (
		<View>
			<InputText
				id={props.leagueNameId}
				label={I18n.translate("leagueName")}
				placeholder={I18n.translate("leagueName")}
				onChange={props.onChange}
			/>
			<InputText
				id={props.passwordId}
				label={I18n.translate("password")}
				placeholder={I18n.translate("password")}
				onChange={props.onChange}
			/>
		</View>
	)
}

JoinLeague.propTypes = {
	leagueNameId: PropTypes.string.isRequired,
	passwordId: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
}


export default JoinLeague
