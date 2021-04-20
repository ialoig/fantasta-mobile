
import PropTypes from "prop-types"
import React from "react"
import * as Linking from 'expo-linking'
import routes from "../../navigation/routesNames"
import { Auth, Init, Token } from "../../services"
import SplashScreen from "./SplashScreen"
import Constants from 'expo-constants'


export class SplashScreenContainer extends React.Component {

	state = {
		redirectData: null,
	};

	_checkDeepLink = async () => {

		console.log(`_checkDeepLink`)

		if (Constants.platform.ios) {
			console.log("running on iOS")
		} else {
			console.log("running on Android")
		}

		const url = await Linking.getInitialURL()
		console.log(`url: ${url}`)

		let { path, queryParams } = Linking.parse(url)
		console.log(`path: ${path}`)
		console.log(`queryParams: ${JSON.stringify(queryParams, null, 2)}`)
		if (path != "") {
			console.log(`DEEP LINK`)
			// this._handleRedirect(path, queryParams);
			this._handleRedirect(url);
		}
		else {
			console.log(`NO DEEP LINK`)
		}
	}

	_handleRedirect = (url) => {
		let { path, queryParams } = Linking.parse(url)

		console.log(`******************** _handleRedirect`)
		console.log(`path: ${path}`)
		console.log(`queryParams: ${JSON.stringify(queryParams, null, 2)}`)

		// this.setState({ redirectData: data });
		this.props.navigation.navigate(path, queryParams)
	};

	_addLinkingListener = () => {
		console.log("********** _addLinkingListener")
		// Linking.addEventListener("url", this._handleRedirect);
		Linking.addEventListener('url', event => {
			console.log(`event url: ${event.url}`)
			this._handleRedirect(event.url);
		});
	};

	_removeLinkingListener = () => {
		console.log("********** _removeLinkingListener")
		Linking.removeEventListener("url", this._handleRedirect);
	};

	constructor(props) {
		super(props);

		// listen for new url events coming from Expo
		this._addLinkingListener();
	}

	// urlRedirect(url) {
	// 	console.log(`urlRedirect: url=${url}`);
	// 	if (!url) return;
	// 	// parse and redirect to new url
	// 	let { path, queryParams } = Linking.parse(url);
	// 	console.log(`Linked to app with path: ${path} and data: ${JSON.stringify(queryParams)}`);
	// 	this.props.navigation.navigate(path, queryParams)
	// 	// this.props.navigation.navigate(path)
	// }

	// constructor(props) {
	// 	super(props);

	// 	// listen for new url events coming from Expo
	// 	Linking.addEventListener('url', event => {
	// 		console.log(`event url: ${event.url}`)
	// 		this.urlRedirect(event.url);
	// 	});
	// }

	async componentDidMount() {

		// Check if app was opened from a deep link
		this._checkDeepLink()

		try {
			await Init()
		}
		catch (error) {
			//TODO: come vogliamo gestire l'errore???
		}

		let token = Token.Get()
		if (token) {
			try {
				let res = await Auth.Authenticate(token)
				this.props.navigation.navigate(routes.HOME)
			}
			catch (error) {
				this.props.navigation.navigate(routes.LOGIN)
			}
		}
		else {
			this.props.navigation.navigate(routes.LOGIN)
		}
	}

	async componentWillUnmount() {
		this._removeLinkingListener
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
