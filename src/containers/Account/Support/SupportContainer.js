import PropTypes from "prop-types"
import React, { Component } from "react"
import routes from "../../../navigation/routesNames"
import Support from "./Support"

export class SupportContainer extends Component {
    
	render() {
		return (
			<Support 
				onPressFeedback={() => this.props.navigation.navigate(routes.FEEDBACK)}
				onPressContactUs={() => this.props.navigation.navigate(routes.CONTACTUS)}
			/>
		)
	}
}


SupportContainer.propTypes = {
	...Support.propTypes,
	navigation: PropTypes.object.isRequired,
}


export default SupportContainer
