import { useNavigation } from "@react-navigation/native"
import { useRoute } from "@react-navigation/native"
import I18n from "i18n-js"
import { Leagues } from "../../services"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { View } from "react-native"
import { FIELDS_ID } from "../../constants"
import { InputText, Button, PopupError } from "../../components"
import routes from "../../navigation/routesNames"
import { validateCreateTeamPage } from "./validation"
import styles from "./styles"

function CreateTeam({ navigation }) {

	const { navigate } = useNavigation()

	const { params } = useRoute()

	const [settings, setSettings] = useState(
		{
			...params, // from AuctionSettings.js
			[FIELDS_ID.teamnameId]: ""
		}
	)
	const [popupShow, setPopupShow] = useState(false)
	const [popupTitle] = useState(I18n.translate("field_error"))
	const [popupMessage, setPopupMessage] = useState("")

	function onChange(id, value) {
		setSettings(set => ({
			...set,
			[id]: value
		}))
	}

	// called from PopupError.js once the popup is closed.
	// The popup state is following the props (see PopupError.js -> useEffect)
	// In order to change the Popup state we need to change the props passed to it
	function popupClosedCallback() {
		setPopupShow(false)
		setPopupMessage("")
	}

	async function buttonOnPress() {
		const errorMessage = validateCreateTeamPage(settings[FIELDS_ID.teamnameId])
		if (errorMessage) {
			setPopupShow(true)
			setPopupMessage(errorMessage)
		}
		else {
			await Leagues.Create(settings)
			// clean the navigation stack. A further back will point to the Dashboard
			navigation.reset({
				index: 0,
				routes: [
					{ name: routes.HOME }
				],
			});
			navigate(routes.BOTTOMTABNAVIGATOR)
		}
	}

	return (
		<View style={styles.container}>
			<PopupError
				popupShow={popupShow}
				popupTitle={popupTitle}
				popupMessage={popupMessage}
				popupClosedCallback={popupClosedCallback}
			/>
			<InputText
				id={FIELDS_ID.teamnameId}
				label={I18n.translate("teamName")}
				placeholder={I18n.translate("teamName")}
				onChange={onChange}
			/>
			<Button
				title={I18n.translate("create")}
				onPress={buttonOnPress}
				type='primary'
				size='large'
			/>
		</View>
	)
}


CreateTeam.propTypes = {}

export default CreateTeam
