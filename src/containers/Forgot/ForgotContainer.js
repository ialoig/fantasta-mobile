
import React from "react"
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
				// todo: show proper notification instead of alert
				Error.showAlert("Email inviata", "Controlla nella posta in arrivo")
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
				Register={this.register.bind(this)}
				ForgotPassword={this.forgotPassword.bind(this)}
			/>
		)
	}
}
