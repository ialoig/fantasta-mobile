import PropTypes from "prop-types"
import React from "react"
import Validator from "validator"
import { FIELDS_ID, PASSWORD_OPT } from "../../constants"
import routes from "../../navigation/routesNames"
import { Auth } from "../../services"

import Login from "./Login"

export class LoginContainer extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			[FIELDS_ID.emailId]: "",
			[FIELDS_ID.passwordId]: "",
			showError: false
		}
	}

	onChange(id, value) {
		this.setState({
			[id]: value
		})
	}

	async login() {

		const email = this.state[FIELDS_ID.emailId] || "user07@email.com"
		const pw = this.state[FIELDS_ID.passwordId] || "user07"
		
		if (email && pw && Validator.isEmail(email) && Validator.isStrongPassword(pw, PASSWORD_OPT)) {
			try {
				await Auth.login(email, pw)
				this.props.navigation.navigate(routes.HOME)
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
		return this.props.navigation.navigate(routes.FORGOT_PASSWORD)
	}

	render() {
		return (
			<Login
				emailId={FIELDS_ID.emailId}
				passwordId={FIELDS_ID.passwordId}
				showError={this.state.showError}
				onChange={this.onChange.bind(this)}
				Login={this.login.bind(this)}
				Register={this.register.bind(this)}
				ForgotPassword={this.forgotPassword.bind(this)}
			/>
		)
	}
}


LoginContainer.propTypes = {
	navigation: PropTypes.object.isRequired
}