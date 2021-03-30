import { useIsFocused, useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import React, { useEffect, useState } from "react"
import { View } from "react-native"
import { Card } from "../../../components"
import routes from "../../../navigation/routesNames"
import { User } from "../../../services"
import { commonStyle } from "../../../styles"
import styles from "../styles"

function AccountDetails() {

	//hook which give access to the navigation object from the component directly
	const { navigate }  = useNavigation()
	const isFocused = useIsFocused()

	const [email, setEmail] = useState(User.Get().email)
	const [username, setUsername] = useState(User.Get().username)


	useEffect( () => {
		setEmail(User.Get().email)
		setUsername(User.Get().username)
	}, [email, username, isFocused])


	return (
		<View style={commonStyle.container}>
			{ /** header 
			<Header title="account_details" backButton={true} onPressBack={(backToAccount)}/>*/}

			<View style={styles.cardContent}>
				{ /** email */}
				<Card
					onPress={() => navigate(routes.EMAIL_SETTINGS)}
					title={I18n.translate("email")}
					description={email}
					type='small'
					arrow={true}
				/>
				{ /** username */}
				<Card
					onPress={() => navigate(routes.USERNAME_SETTINGS)}
					title={I18n.translate("username")}
					description={username}
					type='small'
					arrow={true}
				/>
				{ /** username */}
				<Card
					onPress={() => navigate(routes.DELETE_ACCOUNT)}
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

