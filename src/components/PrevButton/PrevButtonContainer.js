
import React from "react"

import PrevButton from './PrevButton'

export default class PrevButtonContainer extends React.Component {

    render() {

        const {
            onPress,
            type='default',
            icon='true',
        } = this.props

        return (
            <PrevButton
                onPress={onPress}
                type={type}
                icon={icon}
            />
        )
    }
}
