import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import React, { useState } from "react"
import { View } from "react-native"
import { Button, InputText, NumberInc, PopupError, Radio } from "../../components"
import { FIELDS_ID, TIPOLOGY } from "../../constants"
import routes from "../../navigation/routesNames"
import styles from "./styles"
import { validateLeagueSettingsPage } from "./validation"

function LeagueSettings() {

	const { navigate } = useNavigation()

	const [settings, setSettings] = useState(
		{
			[FIELDS_ID.participantsId]: 8,
			[FIELDS_ID.tipologyId]: TIPOLOGY.CLASSIC
		})
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
		const errorMessage = validateLeagueSettingsPage(settings[FIELDS_ID.participantsId])
		if (errorMessage) {
			setPopupShow(true)
			setPopupMessage(errorMessage)
		}
		else {
			navigate(routes.CREATE_LEAGUE_TEAM_SETTINGS, settings)
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
			<NumberInc
				label={I18n.translate("nParticipants")}
				value={settings[FIELDS_ID.participantsId]}
				step={1}
				min={2}
				onChange={value => onChange(FIELDS_ID.participantsId, value)}
			/>
			<Radio
				label={I18n.translate("tipology")}
				value={settings[FIELDS_ID.tipologyId]}
				items={[
					{ label: I18n.translate(TIPOLOGY.CLASSIC), value: TIPOLOGY.CLASSIC },
					{ label: I18n.translate(TIPOLOGY.MANTRA), value: TIPOLOGY.MANTRA }
				]}
				onChange={value => onChange(FIELDS_ID.tipologyId, value)}
			/>
			<Button
				title={I18n.translate("next")}
				onPress={buttonOnPress}
				type='primary'
				size='large'
			/>
		</View>
	)
}

export default LeagueSettings