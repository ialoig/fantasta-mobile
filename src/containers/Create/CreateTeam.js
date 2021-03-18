
import I18n from "i18n-js"
import React from "react"
import { View } from "react-native"

import { InputText } from "../../components"
import styles from "./styles"

const CreateTeam = (props) => {
	return (
		<View style={styles.inputs}>
			<InputText
				id={props.teamnameId}
				label={I18n.translate("teamName")}
				placeholder={I18n.translate("teamName")}
				onChange={props.onChange}
			/>
		</View>
	)
}

export default CreateTeam
