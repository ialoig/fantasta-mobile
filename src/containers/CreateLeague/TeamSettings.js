import { useNavigation , useRoute } from "@react-navigation/native"
import I18n from "i18n-js"
import React, { useState } from "react"
import { View } from "react-native"
import { Button, NumberInc, PopupError } from "../../components"
import { FIELDS_ID, TIPOLOGY } from "../../constants"
import routes from "../../navigation/routesNames"
import styles from "./styles"
import { validateTeamSettingsPage } from "./validation"

function TeamSettings() {

	const { navigate } = useNavigation()

	const { params } = useRoute()

	const [settings, setSettings] = useState(
		{
			...params, // from LeagueSettings.js
			[FIELDS_ID.goalskeepersId]: 3,
			[FIELDS_ID.defendersId]: 8,
			[FIELDS_ID.midfieldersId]: 8,
			[FIELDS_ID.strikersId]: 6,
			[FIELDS_ID.playersId]: 22,
			[FIELDS_ID.budgetId]: 500
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
		const errorMessage = validateTeamSettingsPage(settings[FIELDS_ID.goalskeepersId], settings[FIELDS_ID.defendersId], settings[FIELDS_ID.midfieldersId], settings[FIELDS_ID.strikersId], settings[FIELDS_ID.tipologyId], settings[FIELDS_ID.playersId])
		if (errorMessage) {
			setPopupShow(true)
			setPopupMessage(errorMessage)
		}
		else {
			navigate(routes.CREATE_LEAGUE_AUCTION_SETTINGS, settings)
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
				label={I18n.translate("nGoalkeepers")}
				value={settings[FIELDS_ID.goalskeepersId]}
				step={1}
				min={1}
				onChange={value => onChange(FIELDS_ID.goalskeepersId, value)}
			/>
			{
				settings[FIELDS_ID.tipologyId] == TIPOLOGY.CLASSIC ?
					<View>
						<NumberInc
							label={I18n.translate("nDefenders")}
							value={settings[FIELDS_ID.defendersId]}
							step={1}
							min={3}
							onChange={value => onChange(FIELDS_ID.defendersId, value)}
						/>
						<NumberInc
							label={I18n.translate("nMidfielders")}
							value={settings[FIELDS_ID.midfieldersId]}
							step={1}
							min={3}
							onChange={value => onChange(FIELDS_ID.midfieldersId, value)}
						/>
						<NumberInc
							label={I18n.translate("nStrikers")}
							value={settings[FIELDS_ID.strikersId]}
							step={1}
							min={1}
							onChange={value => onChange(FIELDS_ID.strikersId, value)}
						/>
					</View> : null
			}
			{
				settings[FIELDS_ID.tipologyId] == TIPOLOGY.MANTRA ?
					<NumberInc
						label={I18n.translate("nPlayers")}
						value={settings[FIELDS_ID.playersId]}
						step={1}
						min={10}
						onChange={value => onChange(FIELDS_ID.playersId, value)}
					/> : null
			}
			<NumberInc
				label={I18n.translate("startingBudget")}
				value={settings[FIELDS_ID.budgetId]}
				step={10}
				min={11}
				onChange={value => onChange(FIELDS_ID.budgetId, value)}
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

export default TeamSettings
