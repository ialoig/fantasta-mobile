import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { Text, View } from "react-native"
import { Button, Password } from "../../../../components"
import { FIELDS_ID } from "../../../../constants"
import { commonStyle, textStyles } from "../../../../styles"

function DeleteAccount({onPress, onChange, showError}) {
	return (
		<View style={[commonStyle.container, commonStyle.flex_start]}>
			<Text style={[textStyles.h3, commonStyle.justifyText]}>
				{I18n.translate("delete_warn")}
			</Text>

			<Password
				id={FIELDS_ID.passwordId}
				label={I18n.translate("password")}
				placeholder={I18n.translate("password")}
				showError={showError}
				required={true}
				minLength={6}
				clearButtonMode='never'
				onChange={onChange}
			/>
			<Text style={[textStyles.description, commonStyle.justifyText]}>
				{I18n.translate("delete_descr")}
			</Text>
			<Button
				title={I18n.translate("delete")}
				onPress={onPress}
				type='alert'
				size='large'
			/>

		</View>
	)
}

DeleteAccount.propTypes = {
	onPress: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	showError: PropTypes.bool.isRequired
}


export default DeleteAccount
