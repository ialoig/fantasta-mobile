
import React from "react"

import Logo from "./Logo"

export default class LogoContainer extends React.Component {

	render() {

		const { size="", type="png" } = this.props

		return (
			<Logo size={size} type={type} />
		)
	}
}
