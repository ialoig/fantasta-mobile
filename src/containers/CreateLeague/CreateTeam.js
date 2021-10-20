import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { View } from "react-native"
import { InputText } from "../../components"

const CreateTeam = (props) => {
	return (
		<View>
			<InputText
				id={props.teamnameId}
				label={I18n.translate("teamName")}
				placeholder={I18n.translate("teamName")}
				onChange={props.onChange}
			/>
		</View>
	)
}

CreateTeam.propTypes = {
	teamnameId: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
}

export default CreateTeam
