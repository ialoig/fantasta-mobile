import PropTypes from "prop-types"
import React, { Component } from "react"
import Validator from "validator"
import routes from "../../../../navigation/routesNames"
import { Auth, User } from "../../../../services"
import EmailSettings from "./EmailSettings"

export class EmailSettingsContainer extends Component {

	constructor(props) {
		super(props)
		this.state = {
			email: User.Get().email,
			newEmail: null,
			showError: false
		}
		this.handleOnPress = this.handleOnPress.bind(this)
		this.handleOnChange = this.handleOnChange.bind(this)
	}

	//refreshing data when screen is on focus
	componentDidMount() {
		this._unsubscribe = this.props.navigation.addListener(
			"focus", () => {
				this.setState({
					email: User.Get().email,
				})
			})
        
	}
    

	componentWillUnmount() {
		this._unsubscribe()
	}
    

	handleOnChange(id, value) {
		if (value && !Validator.isEmpty(value))
			this.setState({
				[id]: value
			})
	}


	async handleOnPress() {
		if ( !this.state.newEmail || !Validator.isEmail(this.state.newEmail) ) {
			return this.setState({
				showError: true
			})
		}

		try {
			await Auth.update(this.state.newEmail, null)    
			this.props.navigation.navigate(routes.ACCOUNT_DETAILS)
		} catch (error) {
			console.log("[EmailSettings] handleOnPress - error:" +error)
			return this.setState({showError: true})
		}
	}

	render() {
		return (
			<EmailSettings 
				email={this.state.email}
				onPress={this.handleOnPress}
				onChange={this.handleOnChange}
				showError={this.state.showError}
			/>
		)
	}
}


EmailSettingsContainer.propTypes = {
	navigation: PropTypes.object.isRequired
}


export default EmailSettingsContainer
