import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { View } from "react-native"
import { Button, InputText } from "../../../../components"
import { commonStyle } from "../../../../styles"

function UsernameSettings({username, onPress, onChange, showError}) {

	return (
		<View style={[commonStyle.container, commonStyle.flex_start]}>
			<InputText
				id={"newUsername"}
				label={I18n.translate("leagueName")}
				value={username}
				required={true}
				showError={showError}
				onChange={onChange}
			/>

			<Button
				title={I18n.translate("save")}
				onPress={onPress}
				type='primary'
				size='large'
			/>

		</View>
	)
}


UsernameSettings.propTypes = {
	username: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	showError: PropTypes.bool.isRequired
}

export default UsernameSettings
