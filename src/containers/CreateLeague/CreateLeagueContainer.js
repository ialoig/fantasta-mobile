import { useNavigation } from "@react-navigation/native"
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { View } from "react-native"
import { AUCTION_TYPE, FIELDS_ID, STARTING_PRICE, TIPOLOGY } from "../../constants"
import { InputText, Button, PopupError, NumberInc, Radio } from "../../components"
import routes from "../../navigation/routesNames"
import { Leagues } from "../../services"
// import AuctionSettings from "./AuctionSettings"
// import CreateLeagueSlider from "./CreateLeagueSlider"
// import CreateLeague from "./CreateLeague"
// import CreateTeam from "./CreateTeam"
// import TeamSettings from "./TeamSettings"
import { validateCreateLeaguePage, validateTeamSettingsPage, validateAuctionSettingsPage, validateCreateTeamPage } from "../../utils/validation"
import { commonStyle, textStyles } from "../../styles"

function CreateLeagueContainer() {

	const { navigate } = useNavigation()

	const [settings, setSettings] = useState(
		{
			[FIELDS_ID.leagueNameId]: "",
			[FIELDS_ID.passwordId]: "",
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

	function validateCreateLeaguePage() {
		let isValid = true
		let errorMessage = ""

		if (!settings[FIELDS_ID.leagueNameId]) {
			errorMessage = "missing_league_name"
			isValid = false
		}
		else if (!settings[FIELDS_ID.passwordId]) {
			errorMessage = "missing_password"
			isValid = false
		}
		else if (settings[FIELDS_ID.participantsId] < 2) {
			errorMessage = "participants_error"
			isValid = false
		}
		setPopupShow(!isValid)
		setPopupMessage(errorMessage)
		return isValid
	}

	async function buttonOnPress() {
		if (validateCreateLeaguePage()) {
			// try {
			console.log(`[CreateLeagueContainer]: Next Button`)
			navigate(routes.CREATE_LEAGUE_TEAM_SETTINGS, settings)
			// await Leagues.Create(this.state.settings)
			// this.props.navigation.navigate(routes.BOTTOMTABNAVIGATOR)
			// }
			// catch (error) { /* error handling done in Leagues.Create */ }
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
				<InputText
					id={FIELDS_ID.leagueNameId}
					label={I18n.translate("leagueName")}
					placeholder={I18n.translate("leagueName")}
					onChange={onChange}
				/>
				<InputText
					id={FIELDS_ID.passwordId}
					label={I18n.translate("password")}
					placeholder={I18n.translate("password")}
					onChange={onChange}
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
		</View>
	)
}

CreateLeagueContainer.propTypes = {}

export default CreateLeagueContainer