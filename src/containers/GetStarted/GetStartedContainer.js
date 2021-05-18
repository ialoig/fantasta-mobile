import PropTypes from "prop-types"
import React from "react"
import routes from "../../navigation/routesNames"
import GetStarted from "./GetStarted"
import { data } from "./costants"

export class GetStartedContainer extends React.Component {

	onDone () {
		this.props.navigation.navigate(routes.HOME)
	}
    
	render() {
		return (
			<GetStarted
				data={data}
				onDone={this.onDone.bind(this)}
			/>
		)
	}
}


GetStartedContainer.propTypes = {
	navigation: PropTypes.object.isRequired
}
