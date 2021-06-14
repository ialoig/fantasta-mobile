import { useIsFocused, useNavigation } from "@react-navigation/core"
import React, { useEffect, useState } from "react"
import { View } from "react-native"
import { commonStyle } from "../../../../styles"
import routes from "../../../../navigation/routesNames"
import { Support } from "../../../../services"


function Feedback() {

	const { navigate }  = useNavigation()
	const isFocused = useIsFocused()

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
			<Email
				id={"emailText"}
				label={I18n.translate("message")}
				value={emailText}
				showError={showError}
				required={true}
				clearButtonMode='while-editing'
				onChange={(id, value) => setEmailText(value)}
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

