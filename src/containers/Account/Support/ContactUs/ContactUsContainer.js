import PropTypes from "prop-types"
import React, { Component } from "react"
import ContactUs from "./ContactUs"

export class ContactUsContainer extends Component {


	//TODO: to be defined implementation
	//send an email from user's email to a contactus address

	render() {
		return (
			<ContactUs />
		)
	}
}


ContactUsContainer.propTypes = {
	...ContactUs.propTypes
}

export default ContactUsContainer
