import PropTypes from "prop-types"
import React, { Component } from "react"
import Language from "./Language"

export class LanguageContainer extends Component {


	render() {
		return (
			<Language />
		)
	}
}


LanguageContainer.propTypes = {
	...Language.propTypes
}

export default LanguageContainer
