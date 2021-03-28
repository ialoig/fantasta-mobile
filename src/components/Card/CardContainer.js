import React from "react"
import Card from "./Card"
class CardContainer extends React.Component {

	render() {
		const {
			onPress,
			title="",
			description="",
			type="default",
			icon,
			arrow
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


CardContainer.propTypes = {
	...Card.propTypes
}

CardContainer.defaultProps = {
	...Card.defaultProps
}

export default CardContainer