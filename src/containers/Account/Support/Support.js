import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { View } from "react-native"
import { Card } from "../../../components"
import { commonStyle } from "../../../styles"

import styles from "../styles"

function Support(props) {

	return (
		<View style={commonStyle.container}>
			<View style={styles.cardContent}>
				{ /** Feedback */}
				<Card
					onPress={props.onPressFeedback}
					title={I18n.translate("feedback")}
					description={I18n.translate("feedback_descr")}
					type='small'
					arrow={true}
				/>
				{ /** Contact */}
				<Card
					onPress={props.onPressContactUs}
					title={I18n.translate("contact")}
					description={I18n.translate("contact_descr")}
					type='small'
					arrow={true}
				/>
			</View>
		</View>
	)
}


Support.propTypes = {
	onPressFeedback: PropTypes.func.isRequired,
	onPressContactUs: PropTypes.func.isRequired
}

export default Support

