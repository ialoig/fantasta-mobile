import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import React, { useState } from "react"
import { Text, View } from "react-native"
import { Button, InputText } from "../../components"
import routes from "../../navigation/routesNames"
import { Auth } from "../../services"
import { commonStyle, textStyles } from "../../styles"

function CompleteRegistration() {

	//hook which give access to the navigation object from the component directly
	const { navigate } = useNavigation()

	const [username, setUsername] = useState(null)
	const [error, setError] = useState(null)


	return (
		<View style={[commonStyle.container, commonStyle.flex_start]}>

			<Text style={[textStyles.description, commonStyle.justifyText]}>
				{I18n.translate("complete_register_descr")}
			</Text>

			<InputText
				id="name"
				label={I18n.translate("username")}
				placeholder={I18n.translate("username")}
				required
				showError={error}
				onChange={(id, value) => {
					if (!value) {
						setError(true)
					}
					setUsername(value)
				}}
			/>

			<Button
				title={I18n.translate("save")}
				onPress={
					async() => {
						if ( !username) {
							return setError(true)
						}

						try {
							await Auth.update(null, username) 
							navigate(routes.GETSTARTED)
						} catch (error) {
							console.log("error:" +error)
						}
					}}
				type='primary'
				size='large'
			/>
		</View>
	)
}

export default CompleteRegistration
