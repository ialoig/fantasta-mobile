import PropTypes from "prop-types"
import React from "react"
import Radio from "./Radio"

export default class RadioContainer extends React.Component {

	render() {

		const {
			label="",
			value="",
			items=[],
			onChange
		} = this.props

		return (
			<Radio
				label={label}
				value={value}
				items={items}
				onChange={onChange}
			/>
		)
	}
}

RadioContainer.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	items: PropTypes.array,
	onChange: PropTypes.func,
}
