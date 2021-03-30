import { useNavigation } from "@react-navigation/core"
import I18n from "i18n-js"
import React, { useState } from "react"
import { Text, View } from "react-native"
import { Button, Password } from "../../../../components"
import { FIELDS_ID } from "../../../../constants"
import routes from "../../../../navigation/routesNames"
import { Auth } from "../../../../services"
import { commonStyle, textStyles } from "../../../../styles"

function DeleteAccount() {

	//hook which give access to the navigation object from the component directly
	const { navigate }  = useNavigation()

	const [password, setPassword] = useState(null)
	const [showError, setShowError] = useState(false)

	
	const onPressDelete = async() => {
		if (!password) {
			return setShowError(true)
		}
		try {
			await Auth.deleteAccount(password)
			navigate(routes.LOGIN)
		} catch (error) {
			console.log("[DeleteAccount] - error=" + JSON.stringify(error))
			return setShowError(true)
		}
	}

	
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
				onChange={(id, value) => setPassword(value)}
			/>
			<Text style={[textStyles.description, commonStyle.justifyText]}>
				{I18n.translate("delete_descr")}
			</Text>
			<Button
				title={I18n.translate("delete")}
				onPress={onPressDelete}
				type='alert'
				size='large'
			/>

		</View>
	)
}


export default DeleteAccount
