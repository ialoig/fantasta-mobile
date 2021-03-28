
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { View } from "react-native"
import { Button, Email } from "../../../../components"
import { commonStyle } from "../../../../styles"

function EmailSettings({email, onChange, onPress, showError}) {

	return (
		<View style={[commonStyle.container, commonStyle.flex_start]}>
			<Email
				id={"newEmail"}
				label={I18n.translate("email")}
				value={email}
				placeholder={""}
				showError={showError}
				required={true}
				clearButtonMode='while-editing'
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


EmailSettings.propTypes = {
	email: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	showError: PropTypes.bool.isRequired
}

export default EmailSettings
