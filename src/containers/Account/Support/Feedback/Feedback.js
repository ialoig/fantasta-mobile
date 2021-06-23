import { useNavigation } from "@react-navigation/core"
import I18n from "i18n-js"
import React, { useState } from "react"
import { View } from "react-native"
import { Button, Textarea } from "../../../../components"
import routes from "../../../../navigation/routesNames"
import { Support } from "../../../../services"
import { commonStyle } from "../../../../styles"

function Feedback() {

	const { navigate }  = useNavigation()

	const [emailText, setEmailText] = useState(null)
	const [showError, setShowError] = useState(false)

	const onPress = async() => {
		if ( !emailText ) {
			setShowError(true)
		}

		try {
			await Support.feedBack( emailText )    
			navigate(routes.SUPPORT)
		} catch (error) {
			console.log("[SupportFeedback] handleOnPress - error:" +error)
			return setShowError(true)
		}
	}

	return (
		<View style={[commonStyle.container, commonStyle.flex_start]}>
			<Textarea
				id={"emailText"}
				label={I18n.translate("message")}
				value={emailText}
				showError={showError}
				onChange={(id, value) => setEmailText(value)}
				lines={10}
			/>

			<Button
				title={I18n.translate("send")}
				onPress={onPress}
				type='primary'
				size='large'
			/>

		</View>
	)
}


export default Feedback

