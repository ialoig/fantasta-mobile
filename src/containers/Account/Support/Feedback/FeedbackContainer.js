import PropTypes from "prop-types"
import React, { Component } from "react"
import Feedback from "./Feedback"

export class FeedbackContainer extends Component {

	//TODO: to be define implementation :
	//send an email from the user's email as a feedback message 

	render() {
		return (
			<Feedback />
		)
	}
}


FeedbackContainer.propTypes = {
	...Feedback.propTypes
}

export default FeedbackContainer
