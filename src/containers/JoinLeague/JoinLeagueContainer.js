import { useNavigation } from "@react-navigation/native"
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import { View } from "react-native"
import React, { useState } from "react"
import { FIELDS_ID } from "../../constants"
import { InputText, Button, PopupError } from "../../components"
import routes from "../../navigation/routesNames"
import Leagues from "../../services"
import { commonStyle, textStyles } from "../../styles"

function JoinLeagueContainer() {

	const { navigate } = useNavigation()

	const [settings, setSettings] = useState(
		{
			[FIELDS_ID.leagueNameId]: "",
			[FIELDS_ID.passwordId]: "",
			[FIELDS_ID.teamnameId]: ""
		})
	const [popupShow, setPopupShow] = useState(false)
	const [popupTitle] = useState(I18n.translate("field_error"))
	const [popupMessage, setPopupMessage] = useState("")


	// called when changing any of the fields in the slides
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

	function validateJoinLeaguePage(leagueName, password, teamname) {
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
		else if (!settings[FIELDS_ID.teamnameId]) {
			errorMessage = "missing_team_name"
			isValid = false
		}
		setPopupShow(!isValid)
		setPopupMessage(errorMessage)
		return isValid
	}

	async function buttonOnPress() {
		if (validateJoinLeaguePage()) {
			try {
				await Leagues.Join("", this.state.settings[FIELDS_ID.leagueNameId], this.state.settings[FIELDS_ID.passwordId], this.state.settings[FIELDS_ID.teamnameId])
				this.props.navigation.navigate(routes.BOTTOMTABNAVIGATOR) // TODO: what is this? it should bring me to the joined League
			}
			catch (error) { console.error(`[JoinLeagueContainer]: ${error}`) } // error handling done in Leagues.Join
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
				<InputText
					id={FIELDS_ID.teamnameId}
					label={I18n.translate("teamName")}
					placeholder={I18n.translate("teamName")}
					onChange={onChange}
				/>
				<Button
					title={I18n.translate("join")}
					onPress={buttonOnPress}
					type='primary'
					size='large'
				/>
			</View>
		</View>
	)

}


JoinLeagueContainer.propTypes = {}

export default JoinLeagueContainer