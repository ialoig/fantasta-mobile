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

	const [email, setEmail] = useState(User.get().email)
	const [username, setUsername] = useState(User.get().username)


	useEffect( () => {
		setEmail(User.get().email)
		setUsername(User.get().username)
	}, [email, username, isFocused])


	return (
		<View style={commonStyle.container}>
			
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

				{ /** change password */}
				<Card
					onPress={() => navigate(routes.PASSWORD_SETTINGS)}
					title={I18n.translate("change_password")}
					type='small'
					arrow={true}
				/>

				{ /** delete account */}
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

