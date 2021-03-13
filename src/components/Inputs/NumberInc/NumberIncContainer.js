
import React from "react"

import NumberInc from "./NumberInc"

export default class NumberIncContainer extends React.Component {

	render() {

		const {
			id,
			label="",
			value=1,
			step=1,
			min=0,
			max=null,
			onChange
		} = this.props

		return (
			<NumberInc
				id={id}
				name={id}
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
