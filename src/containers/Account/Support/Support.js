import { useNavigation } from "@react-navigation/core"
import I18n from "i18n-js"
import React from "react"
import { View } from "react-native"
import { Card } from "../../../components"
import routes from "../../../navigation/routesNames"
import { commonStyle } from "../../../styles"

import styles from "../styles"

function Support() {

	//hook which give access to the navigation object from the component directly
	const { navigate }  = useNavigation()

	return (
		<View style={commonStyle.container}>
			<View style={styles.cardContent}>
				{ /** Feedback */}
				<Card
					onPress={() => navigate(routes.FEEDBACK)}
					title={I18n.translate("feedback")}
					description={I18n.translate("feedback_descr")}
					type='small'
					arrow={true}
				/>
				{ /** Contact */}
				<Card
					onPress={() => navigate(routes.CONTACTUS)}
					title={I18n.translate("contact")}
					description={I18n.translate("contact_descr")}
					type='small'
					arrow={true}
				/>
			</View>
		</View>
	)
}


export default Support

