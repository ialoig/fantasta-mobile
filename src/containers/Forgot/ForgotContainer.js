
import React from "react"
import * as Linking from 'expo-linking'
import Validator from "validator"
import { FIELDS_ID } from "../../constants"
import routes from "../../navigation/routesNames"
import { Auth, Error } from "../../services"

import Forgot from "./Forgot"

export class ForgotContainer extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			[FIELDS_ID.emailId]: "",
			showError: false
		}
	}

	onChange(id, value, valid) {
		this.setState({
			[id]: value
		})
	}

	async forgot() {

		const email = this.state[FIELDS_ID.emailId] || ""

		if (email && Validator.isEmail(email)) {
			try {
				let res = await Auth.forgot(email)

				let redirectUrl2 = Linking.makeUrl(routes.LOGIN, {
					queryParams: { email: email },
				});

				console.log(`redirectUrl2: ${redirectUrl2}`)
				Error.showAlert("Email inviata", "Controlla nella posta in arrivo")

				let { path, queryParams } = Linking.parse(redirectUrl2);
				console.log(`Linked to app with path: ${path} and data: ${JSON.stringify(queryParams)}`);

				this.props.navigation.navigate(routes.LOGIN)
			}
			catch (error) {
				//managed on services/auth.js
			}
		}
		else {
			this.setState({ showError: true })
		}
	}

	async deeplink() {
		// let redirectUrl = "exp://192.168.0.154:19000"
		// let redirectUrl = "exp://192.168.0.154:19000/--/Login?queryParams%255Bemail%255D=user01%2540email.com"
		let redirectUrl = "exp://192.168.0.154:19000/--/Login"
		console.log(`redirectUrl: ${redirectUrl}`)
		let { path, queryParams } = Linking.parse(redirectUrl);
		console.log(`DEEP LINK: ${path} and data: ${JSON.stringify(queryParams)}`);
		this.props.navigation.navigate(path)
	}

	register() {
		return this.props.navigation.navigate(routes.REGISTER)
	}

	forgotPassword() {
		console.log("forgot password")
	}

	render() {
		return (
			<Forgot
				emailId={FIELDS_ID.emailId}
				passwordId={FIELDS_ID.passwordId}
				showError={this.state.showError}
				onChange={this.onChange.bind(this)}
				Forgot={this.forgot.bind(this)}
				deepLink={this.deeplink.bind(this)}
			/>
		)
	}
}
