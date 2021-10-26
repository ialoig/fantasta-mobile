import { useNavigation } from "@react-navigation/native"
import { useRoute } from "@react-navigation/native"
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { View } from "react-native"
import { commonStyle } from "../../styles"

import { AUCTION_TYPE, FIELDS_ID, STARTING_PRICE, TIPOLOGY } from "../../constants"
import { InputText, Button, PopupError, NumberInc, Radio } from "../../components"
import routes from "../../navigation/routesNames"

function TeamSettings() {

	const { navigate } = useNavigation()

	const { params } = useRoute()

	const [settings, setSettings] = useState(
		{
			...params, // from CreateLeagueContainer.js
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


	function validateTeamSettingsPage() {
		let isValid = true
		let errorMessage = ""
	
		if (settings[FIELDS_ID.goalskeepersId] < 1) {
			errorMessage = "goalskeepers_error"
			isValid = false
		}
		else if (settings[FIELDS_ID.tipologyId] == TIPOLOGY.CLASSIC && settings[FIELDS_ID.defendersId] < 3) {
			errorMessage = "defenders_error"
			isValid = false
		}
		else if (settings[FIELDS_ID.tipologyId] == TIPOLOGY.CLASSIC && settings[FIELDS_ID.midfieldersId] < 3) {
			errorMessage = "midfielders_error"
			isValid = false
		}
		else if (settings[FIELDS_ID.tipologyId] == TIPOLOGY.CLASSIC && settings[FIELDS_ID.strikersId] < 1) {
			errorMessage = "forwarders_error"
			isValid = false
		}
		else if (settings[FIELDS_ID.tipologyId] == TIPOLOGY.CLASSIC && settings[FIELDS_ID.defendersId] + settings[FIELDS_ID.midfieldersId] + settings[FIELDS_ID.strikersId] < 10) {
			errorMessage = "players_error"
			isValid = false
		}
		else if (settings[FIELDS_ID.tipologyId] == TIPOLOGY.MANTRA && settings[FIELDS_ID.playersId] < 10) {
			errorMessage = "players_error"
			isValid = false
		}
		setPopupShow(!isValid)
		setPopupMessage(errorMessage)
		return isValid
	
	}

	async function buttonOnPress() {
		if (validateTeamSettingsPage()) {
			navigate(routes.CREATE_LEAGUE_AUCTION_SETTINGS, settings)
		}
	}

	return (
		<View style={commonStyle.container}>
			<View style={commonStyle.content}>
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
		</View>
	)
}


TeamSettings.propTypes = {

	// leagueNameId: PropTypes.string.isRequired,
	// passwordId: PropTypes.string.isRequired,
	// participantsId: PropTypes.number.isRequired,
	// tipologyId: PropTypes.object.isRequired,
	// goalskeepersId: PropTypes.string.isRequired,
	// defendersId: PropTypes.string.isRequired,
	// midfieldersId: PropTypes.string.isRequired,
	// strikersId: PropTypes.string.isRequired,
	// budgetId: PropTypes.string.isRequired,
	// playersId: PropTypes.string.isRequired,
	// tipology: PropTypes.object.isRequired,
	// tipologyId: PropTypes.string.isRequired,
	// settings: PropTypes.object.isRequired,
	// onChange: PropTypes.func.isRequired
}

export default TeamSettings
