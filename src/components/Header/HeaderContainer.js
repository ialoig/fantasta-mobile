import React, { Component } from "react"

import Header from "./Header"

export default class HeaderContainer extends Component {

	render() {
		const { 
			title = "",
			backButton = false,
			onPressBack,
			rightButton = false,
			onPressRight,
			iconTypeBack,
			iconTypeRight
		} = this.props
    
		return (
			<Header 
				title={title} 
				backButton={backButton} onPressBack={onPressBack} iconTypeBack={iconTypeBack}
				rightButton={rightButton} onPressRight={onPressRight} iconTypeRight={iconTypeRight}
			/>
		)
	}
}

