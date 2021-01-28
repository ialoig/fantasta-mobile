
import React from "react"

import Radio from './Radio'

export default class RadioContainer extends React.Component {

    render() {

        const {
            id,
            label='',
            value='',
            items=[],
            onChange
        } = this.props

        return (
            <Radio
                id={id}
                name={id}
                label={label}
                value={value}
                items={items}
                onChange={onChange}
            />
        )
    }
}
