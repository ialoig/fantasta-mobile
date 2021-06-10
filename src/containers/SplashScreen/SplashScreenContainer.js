
import PropTypes from "prop-types"
import React from "react"
import * as Linking from 'expo-linking'
import routes from "../../navigation/routesNames"
import { Auth, Init, Token } from "../../services"
import SplashScreen from "./SplashScreen"
import Constants from 'expo-constants'


export class SplashScreenContainer extends React.Component {

	deepLinkRedirection = async (url) => {

		// Check device OS
		if (Constants.platform.ios) {
			console.log("running on iOS")
		} else {
			console.log("running on Android")
		}

		let { path, queryParams } = Linking.parse(url)
		console.log(`url: ${url}`)
		console.log(`path: ${path}`)
		console.log(`queryParams: ${JSON.stringify(queryParams, null, 2)}`)

		if (path != "") {
			console.log(`App started via DeepLink`)
			this.setState({ deepLink: true })
			this.handleRedirect(url)
		}
		else {
			this.setState({ deepLink: false })
			console.log(`App started normally`)
		}
	}

	handleRedirect = (url) => {
		let { path, queryParams } = Linking.parse(url)
		this.props.navigation.navigate(path, queryParams)
	};

	constructor(props) {
		super(props);

		this.state = {
			deepLink: false
		}

		// listen for "url" events coming from Expo
		Linking.addEventListener("url", (event) => this.handleRedirect(event.url));
	}

	async componentDidMount() {

		try {
			await Init()
		}
		catch (error) {
			//TODO: come vogliamo gestire l'errore???
		}

		// Check whether the app was open via a deepLink
		this.deepLinkRedirection(await Linking.getInitialURL())

		// App started normally
		if (!this.state.deepLink) {
			let token = Token.Get()
			if (token) {
				try {
					let res = await Auth.Authenticate(token)
					this.props.navigation.navigate(routes.HOME)
				}
				catch (error) {
					this.props.navigation.navigate(routes.BOTTOMTABNAVIGATOR)
				}
			}
			else {
				this.props.navigation.navigate(routes.BOTTOMTABNAVIGATOR)
			}
		}
	}

	async componentWillUnmount() {
		Linking.removeEventListener("url", this._handleRedirect);
	}

	render() {

		return (
			<SplashScreen />
		)
	}
}

SplashScreenContainer.propTypes = {
	navigation: PropTypes.object.isRequired
}
