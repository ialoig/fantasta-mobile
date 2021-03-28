import PropTypes from "prop-types"
import React, { Component } from "react"
import validator from "validator"
import routes from "../../../../navigation/routesNames"
import { Auth, User } from "../../../../services"
import UsernameSettings from "./UsernameSettings"


export class UsernameSettingsContainer extends Component {
    
    
	constructor(props) {
		super(props)
		this.state = {
			username: User.Get().username,
			newUsername: null,
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
					username: User.Get().username,
				})
			})
	}
    

	componentWillUnmount() {
		this._unsubscribe()
	}
    

	handleOnChange(id, value) {
		if (value && !validator.isEmpty(value))
			this.setState({
				[id]: value
			})
	}


	async handleOnPress() {
		if ( !this.state.newUsername ) {
			return this.setState({showError: true})
		}

		try {
			await Auth.update(null, this.state.newUsername) 
			this.props.navigation.navigate(routes.ACCOUNT_DETAILS)
		} catch (error) {
			console.log("[UsernameSettings] handleOnPress - error:" +error)
			return this.setState({showError: true})
		}
	}
    
    
	render() {
		return (
			<UsernameSettings 
				username={this.state.username}
				onPress={this.handleOnPress}
				onChange={this.handleOnChange}
				showError={this.state.showError}
			/>
		)
	}
}


UsernameSettingsContainer.propTypes = {
	navigation: PropTypes.object.isRequired
}


export default UsernameSettingsContainer
