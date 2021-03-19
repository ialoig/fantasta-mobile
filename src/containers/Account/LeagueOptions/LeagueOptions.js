import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import React from "react"

import { View } from "react-native"

import { Header, InputText, NumberInc, Radio } from "../../../components"

import { FIELDS_ID, TIPOLOGY } from "../../../constants"
import { commonStyle } from "../../../styles"

function LeagueOptions(props) {

	//hook which give access to the navigation object from the component directly
	const navigation = useNavigation()

	return (
		<View style={[commonStyle.container, commonStyle.flex_start]}>
			{ /** header */}
			<Header title="league_descr" backButton={true} onPressBack={() => navigation.goBack()}/>

			<InputText
				id={FIELDS_ID.leagueNameId}
				label={I18n.translate("leagueName")}
				placeholder={I18n.translate("leagueName")}
				onChange={""}
			/>
			<InputText
				id={FIELDS_ID.passwordId}
				label={I18n.translate("password")}
				placeholder={I18n.translate("password")}
				onChange={""}
			/>
			<NumberInc
				label={I18n.translate("nParticipants")}
				value={""}
				step={1}
				min={2}
				onChange={""} 
			/>
			<Radio 
				label={I18n.translate("tipology")}
				value={""}
				items={[
					{ label: I18n.translate(TIPOLOGY.CLASSIC), value: TIPOLOGY.CLASSIC },
					{ label: I18n.translate(TIPOLOGY.MANTRA), value: TIPOLOGY.MANTRA }
				]}
				onChange={""} 
			/>
		</View>
	)
}

export default LeagueOptions

