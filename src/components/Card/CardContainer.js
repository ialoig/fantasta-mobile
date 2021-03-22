
import React from "react"

import Card from "./Card"

export default class CardContainer extends React.Component {

	render() {
		console.log("[CardContainer] props", this.props)
		const {
			onPress,
			title="",
			description="",
			type="default",
			icon,
			arrow=""
		} = this.props
        
		return (
			<Card
				onPress={onPress}
				title={title}
				description={description}
				type={type}
				icon={icon}
				arrow={arrow}
			/>
		)
	}
}
