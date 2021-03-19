import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import React from "react"
import { View } from "react-native"
import { Card, Header} from "../../../components"
import routes from "../../../navigation/routesNames"
import { commonStyle } from "../../../styles"
import styles from "../styles"


function Settings() {
    
	//hook which give access to the navigation object from the component directly
	const { navigate, goBack } = useNavigation()
    
	return (
		<View style={commonStyle.container}>
			{ /** header */}
			<Header title="settings" backButton={true} onPressBack={() => goBack()}/>
			<View style={styles.cardContent}>
				{ /** language */}
				<Card
					onPress={() => navigate(routes.LANGUAGE)}
					title={I18n.translate("language")}
					description=""
					type='small'
					arrow={true}
				/>
			</View>
		</View>
	)
}
export default Settings