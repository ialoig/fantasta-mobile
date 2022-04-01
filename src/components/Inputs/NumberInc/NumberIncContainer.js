import PropTypes from "prop-types"
import React from "react"
import NumberInc from "./NumberInc"

export default class NumberIncContainer extends React.Component {

	render() {

		const {
			label="",
			value=1,
			step=1,
			min=0,
			max=null,
			onChange
		} = this.props

		return (
			<NumberInc
				label={label}
				value={value}
				step={step}
				min={min}
				max={max}
				onChange={onChange}
			/>
		)
	}
}


NumberIncContainer.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.number,
	step: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number,
	onChange: PropTypes.func,
}