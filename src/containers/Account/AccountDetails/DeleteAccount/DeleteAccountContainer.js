import PropTypes from "prop-types"
import React, { Component } from "react"
import routes from "../../../../navigation/routesNames"
import { Auth } from "../../../../services"
import DeleteAccount from "./DeleteAccount"


class DeleteAccountContainer extends Component {

	constructor(props) {
		super(props)
		this.state = {
			showError: false,
			password: null
		}
		this.handleOnChange = this.handleOnChange.bind(this)
		this.handleOnPress = this.handleOnPress.bind(this)
	}


	handleOnChange(id, value) {
		this.setState({
			[id]: value
		})
	}


	async handleOnPress() {
		if (!this.state.password) {
			return this.setState({showError: true})
		}
		try {
			await Auth.deleteAccount(this.state.password)
			this.props.navigation.navigate(routes.LOGIN)
		} catch (error) {
			console.log("[DeleteAccount] - error=" + JSON.stringify(error))
			return this.setState({showError: true})
		}
	}


	render() {
		return (
			<DeleteAccount 
				showError={this.state.showError}
				onPress={this.handleOnPress}
				onChange={this.handleOnChange}
			/>
		)
	}
}

DeleteAccountContainer.propTypes = {
	...DeleteAccount.propTypes,
	navigation: PropTypes.object.isRequired
}


export default DeleteAccountContainer
