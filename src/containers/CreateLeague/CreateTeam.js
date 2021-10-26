import { useNavigation, useNavigationState } from "@react-navigation/native"
import { useRoute } from "@react-navigation/native"
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated"
import I18n from "i18n-js"
import { Leagues } from "../../services"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { View } from "react-native"
import { commonStyle } from "../../styles"

import { AUCTION_TYPE, FIELDS_ID, STARTING_PRICE, TIPOLOGY } from "../../constants"
import { InputText, Button, PopupError, NumberInc, Radio } from "../../components"
import routes from "../../navigation/routesNames"

function CreateTeam() {

	const { navigate } = useNavigation()
	const state = useNavigationState(state => state);


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


	function validateCreateTeamPage() {
		let isValid = true
		let errorMessage = ""

		if (!settings[FIELDS_ID.teamnameId]) {
			errorMessage = "missing_team_name"
			isValid = false
		}

		setPopupShow(!isValid)
		setPopupMessage(errorMessage)
		return isValid
	}

	async function buttonOnPress() {
		if (validateCreateTeamPage()) {
			try {
				//await Leagues.Create(settings)
				console.log(`navigation: ${JSON.stringify(state, null, 2)}`)
				navigate(routes.BOTTOMTABNAVIGATOR) // TODO: what is this? it should bring me to the joined League
			}
			catch (error) {
				console.log(`[CreateTeam] error ${error}`)
				/* error handling done in Leagues.Create */
			}
		}
	}

	return (
		<View style={commonStyle.container}>
			<View style={commonStyle.content}>
				{/* <PopupError
					popupShow={popupShow}
					popupTitle={popupTitle}
					popupMessage={popupMessage}
					popupClosedCallback={popupClosedCallback}
				/> */}
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
		</View>
	)
}


CreateTeam.propTypes = {

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

export default CreateTeam
