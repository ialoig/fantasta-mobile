import PropTypes from "prop-types"
import React, { Component } from "react"
import routes from "../../../navigation/routesNames"
import Settings from "./Settings"


export class SettingsContainer extends Component {


	render() {
		return (
			<Settings
				onPressLanguage={() => this.props.navigation.navigate(routes.LANGUAGE)}
			/>
		)
	}
}

SettingsContainer.propTypes = {
	...Settings.propTypes,
	navigation: PropTypes.object.isRequired
}

export default SettingsContainer
