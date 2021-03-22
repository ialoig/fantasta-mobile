
import PropTypes from "prop-types"
import React from "react"
import routes from "../../navigation/routesNames"

import { Auth, Init, Token } from "../../services"

import SplashScreen from "./SplashScreen"


export class SplashScreenContainer extends React.Component {
	static propTypes = {
		navigation: PropTypes.object.isRequired
	}
	
	async componentDidMount ()
	{
		try
		{
			await Init()
		}
		catch (error)
		{

			//TODO: come vogliamo gestire l'errore???
		}

		let token = Token.Get()
		if ( token )
		{
			try
			{
				let res = await Auth.Authenticate( token )
				this.props.navigation.navigate(routes.HOME)
			}
			catch (error)
			{
				this.props.navigation.navigate(routes.LOGIN)
			}
		}
		else
		{
			this.props.navigation.navigate(routes.LOGIN)
		}
	}

	render() {

		return (
			<SplashScreen />
		)
	}
}
