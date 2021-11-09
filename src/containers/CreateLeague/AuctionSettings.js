import { useNavigation , useRoute } from "@react-navigation/native"
import I18n from "i18n-js"
import React, { useState } from "react"
import { View } from "react-native"
import { Button, NumberInc, PopupError, Radio } from "../../components"
import { AUCTION_TYPE, FIELDS_ID, STARTING_PRICE } from "../../constants"
import routes from "../../navigation/routesNames"
import styles from "./styles"
import { validateAuctionSettingsPage } from "./validation"

function AuctionSettings() {
	const { navigate } = useNavigation()

	const { params } = useRoute()

	const [settings, setSettings] = useState(
		{
			...params, // from TeamSettings.js
			[FIELDS_ID.countdownId]: 60,
			[FIELDS_ID.auctiontypeId]: AUCTION_TYPE.RANDOM,
			[FIELDS_ID.startpriceId]: STARTING_PRICE.NONE
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
		const errorMessage = validateAuctionSettingsPage(settings[FIELDS_ID.countdownId])
		if (errorMessage) {
			setPopupShow(true)
			setPopupMessage(errorMessage)
		}
		else {
			navigate(routes.CREATE_TEAM, settings)
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
	)
}

export default AuctionSettings
