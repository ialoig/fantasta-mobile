import PropTypes from "prop-types"
import React from "react"
import Validator from "validator"
import { FIELDS_ID, PASSWORD_OPT } from "../../constants"
import routes from "../../navigation/routesNames"
import { Auth } from "../../services"
import Register from "./Register"

export class RegisterContainer extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			[FIELDS_ID.emailId]: "",
			[FIELDS_ID.passwordId]: "",
			[FIELDS_ID.repeatPasswordId]: "",
			showError: false
		}
	}

	onChange(id, value) {
		this.setState({
			[id]: value
		})
	}

	async register() {
		const email = this.state[FIELDS_ID.emailId] || ""
		const pw1 = this.state[FIELDS_ID.passwordId] || ""
		const pw2 = this.state[FIELDS_ID.repeatPasswordId] || ""

		if (!email || !Validator.isEmail(email)) {

			this.setState({ showError: true })
			return
		}

		if (!pw1 || !Validator.isStrongPassword(pw1, PASSWORD_OPT)) {
			this.setState({ showError: true })
			return
		}

		if (pw1 != pw2) {
			this.setState({ showError: true })
			return
		}

		if (email && pw1 && pw1 == pw2) {
			try {
				await Auth.Register(email, pw1)

				this.props.navigation.navigate(routes.COMPLETE_REGISTER)
			}
			catch (error) {
				//managed on services/auth.js
			}
		}
	}

	render() {
		return (
			<Register
				emailId={FIELDS_ID.emailId}
				passwordId={FIELDS_ID.passwordId}
				repeatPasswordId={FIELDS_ID.repeatPasswordId}
				password={this.state[FIELDS_ID.passwordId]}
				showError={this.state.showError}
				onChange={this.onChange.bind(this)}
				Register={this.register.bind(this)}
				login={
					() => this.props.navigation.navigate(routes.LOGIN)
				}
			/>
		)
	}
}


RegisterContainer.propTypes = {
	navigation: PropTypes.object.isRequired
}