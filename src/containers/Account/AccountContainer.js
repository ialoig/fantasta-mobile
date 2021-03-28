import PropTypes from "prop-types"
import React, { Component } from "react"
import routes from "../../navigation/routesNames"
import { Token, User } from "../../services"
import Account from "./Account"

export class AccountContainer extends Component {


	constructor(props) {
		super(props)
		this.state = {
			email: User.Get().email,
			username: User.Get().username
		}
		this.handleLogout = this.handleLogout.bind(this)
	}  

	//refreshing data when screen is on focus
	componentDidMount() {
		this._unsubscribe = this.props.navigation.addListener(
			"focus", () => {
				this.setState({
					email: User.Get().email,
					username: User.Get().username
				})
			})
	}
    
    
	componentWillUnmount() {
		this._unsubscribe()
	}


	handleLogout() {
		User.remove()
		Token.remove()
		this.props.navigation.navigate(routes.LOGIN)
	}


	render() {
		return (
			<Account 
				username={this.state.username}
				email={this.state.email}
				onPressAccountDetails={() => {this.props.navigation.navigate(routes.ACCOUNT_DETAILS)}}
				onPressSettings={() => {this.props.navigation.navigate(routes.SETTINGS)}}
				onPressSupport={() => {this.props.navigation.navigate(routes.SUPPORT)}}
				logout={this.handleLogout}
			/>
		)
	}
}


AccountContainer.propTypes = {
	...Account.propTypes,
	navigation: PropTypes.object.isRequired
}

export default AccountContainer
