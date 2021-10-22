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

function AuctionSettings() {
	const { navigate } = useNavigation()

	const { params } = useRoute()

	const [settings, setSettings] = useState(
		{
			...params,
			[FIELDS_ID.countdownId]: 60,
			[FIELDS_ID.auctiontypeId]: AUCTION_TYPE.RANDOM,
			[FIELDS_ID.startpriceId]: STARTING_PRICE.NONE,
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

	function validateAuctionSettingsPage() {
		let isValid = true
		let errorMessage = ""

		if (settings[FIELDS_ID.countdown] < 3) {
			errorMessage = "countdown_error"
			isValid = false
		}
		setPopupShow(!isValid)
		setPopupMessage(errorMessage)
		return isValid
	}

	async function buttonOnPress() {
		if (validateAuctionSettingsPage()) {
			// try {
			console.log(`[AuctionSettings]: Next Button`)
			// navigate(routes.)
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
				<NumberInc
					label={I18n.translate("countdown")}
					value={settings[FIELDS_ID.countdownId]}
					step={1}
					min={3}
					onChange={value => onChange(FIELDS_ID.countdownId, value)}
				/>

				<Radio
					label={I18n.translate("auctionTipology")}
					value={settings[FIELDS_ID.auctiontypeId]}
					items={[
						{ label: I18n.translate(AUCTION_TYPE.RANDOM), value: AUCTION_TYPE.RANDOM },
						{ label: I18n.translate(AUCTION_TYPE.CALL), value: AUCTION_TYPE.CALL },
						{ label: I18n.translate(AUCTION_TYPE.ALPHABETIC), value: AUCTION_TYPE.ALPHABETIC }
					]}
					onChange={value => onChange(FIELDS_ID.auctiontypeId, value)}
				/>
				<Radio
					label={I18n.translate("startingPrice")}
					value={settings[FIELDS_ID.startpriceId]}
					items={[
						{ label: I18n.translate("zero"), value: STARTING_PRICE.NONE },
						{ label: I18n.translate("listPrice"), value: STARTING_PRICE.LIST }
					]}
					onChange={value => onChange(FIELDS_ID.startpriceId, value)}
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

AuctionSettings.propTypes = {
	// auctionType: PropTypes.object.isRequired,
	// auctiontypeId: PropTypes.string.isRequired,
	// countdownId: PropTypes.string.isRequired,
	// startingPrice: PropTypes.object.isRequired,
	// startpriceId: PropTypes.string.isRequired,
	// settings: PropTypes.object.isRequired,
	// onChange: PropTypes.func.isRequired
}


export default AuctionSettings
