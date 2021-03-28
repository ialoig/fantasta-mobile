import PropTypes from "prop-types"
import React, { Component } from "react"
import { User } from "../../../services"
import Account from "../Account"
import AccountDetails from "./AccountDetails"


class AccountDetailsContainer extends Component {

	constructor(props) {
		super(props)
		this.state = {
			email: User.Get().email,
			username:  User.Get().username
		}
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
    


	render() {
		return (
			<AccountDetails 
				email={this.state.email} 
				username={this.state.username} 
			/>
		)
	}
}


AccountDetailsContainer.propTypes = {
	...Account.propTypes,
	navigation: PropTypes.object.isRequired
}

export default AccountDetailsContainer