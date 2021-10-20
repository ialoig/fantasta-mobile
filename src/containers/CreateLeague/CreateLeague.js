import I18n from "i18n-js"
import PopupError from "../../components/Popup/PopupError"
import PropTypes from "prop-types"
import React from "react"
import { View } from "react-native"
import { InputText, NumberInc, Radio } from "../../components"
import { commonStyle } from "../../styles"

const CreateLeague = (props) => {
	return (
		<View style={commonStyle.flex}>
			<InputText
				id={props.leagueNameId}
				label={I18n.translate("leagueName")}
				placeholder={I18n.translate("leagueName")}
				onChange={props.onChange}
			/>
			<InputText
				id={props.passwordId}
				label={I18n.translate("password")}
				placeholder={I18n.translate("password")}
				onChange={props.onChange}
			/>
			<NumberInc
				label={I18n.translate("nParticipants")}
				value={props.settings[props.participantsId]}
				step={1}
				min={2}
				onChange={value => props.onChange( props.participantsId, value )}
			/>
			<Radio 
				label={I18n.translate("tipology")}
				value={props.settings[props.tipologyId]}
				items={[
					{ label: I18n.translate(props.tipology.CLASSIC), value: props.tipology.CLASSIC },
					{ label: I18n.translate(props.tipology.MANTRA), value: props.tipology.MANTRA }
				]}
				onChange={value => props.onChange( props.tipologyId, value )}
			/>
			<PopupError popupShow={props.popupShow} popupTitle={props.popupTitle} popupMessage={props.popupMessage} popupClosedCallback={props.popupClosedCallback}/>
		</View>
	)
}

CreateLeague.propTypes = {
	leagueNameId: PropTypes.string.isRequired,
	passwordId: PropTypes.string.isRequired,
	participantsId: PropTypes.string.isRequired,
	tipology: PropTypes.object.isRequired,
	tipologyId: PropTypes.string.isRequired,
	settings: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
	popupClosedCallback: PropTypes.func,
	popupMessages: PropTypes.array,
	popupShow: PropTypes.bool.isRequired,
	popupTitle: PropTypes.string.isRequired
}

export default CreateLeague
