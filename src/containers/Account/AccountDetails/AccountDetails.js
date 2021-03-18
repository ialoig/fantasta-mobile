import { useNavigation, useRoute } from "@react-navigation/native"
import I18n from "i18n-js"
import React from "react"
import { View } from "react-native"

import { Card, Header} from "../../../components"
import routes from "../../../navigation/routesNames"
import { commonStyle } from "../../../styles"
import styles from "../styles"

function AccountDetails() {

	//hook which give access to the navigation object from the component directly
	const { navigate }  = useNavigation()
	const route = useRoute()
	const { email, username } = route.params

	//needed to pass back updated params
	const backToAccount = () => {
		return navigate(routes.ACCOUNT, 
			{
				email: email,
				username: username
			})
	}

	const goTo = (screen) => {
		if (!screen) {
			return
		}
		switch(screen) {
		case routes.USERNAME_SETTINGS:
			return navigate(routes.USERNAME_SETTINGS, {username: username})
		case routes.EMAIL_SETTINGS:
			return navigate(routes.EMAIL_SETTINGS, {email: email})
		case routes.DELETE_ACCOUNT:
			return navigate(routes.DELETE_ACCOUNT, {email: email})
		default:
			return
		}
	}

	return (
		<View style={commonStyle.container}>
			{ /** header */}
			<Header title="account_details" backButton={true} onPressBack={(backToAccount)}/>

			<View style={styles.cardContent}>
				{ /** email */}
				<Card
					onPress={() => goTo(routes.EMAIL_SETTINGS)}
					title={I18n.translate("email")}
					description={email}
					type='small'
					arrow={true}
				/>
				{ /** username */}
				<Card
					onPress={() => goTo(routes.USERNAME_SETTINGS)}
					title={I18n.translate("username")}
					description={username}
					type='small'
					arrow={true}
				/>
				{ /** username */}
				<Card
					onPress={() => goTo(routes.DELETE_ACCOUNT)}
					title={I18n.translate("delete_account")}
					description={""}
					type='small'
					arrow={true}
				/>
			</View>
		</View>
	)
}

export default AccountDetails

