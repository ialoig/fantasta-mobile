import React from "react"
import IconButton from "./IconButton"

export default class IconButtonContainer extends React.Component {

	constructor (props) {
		super(props)
		console.log("[IconButtonContainer] props", props)
	}

	render() {

		const {
			type="default",
			icon=true,
		} = this.props

		return (
			<IconButton
				type={type}
				icon={icon}
			/>
		)
	}
}
