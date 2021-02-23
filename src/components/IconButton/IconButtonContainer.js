
import React from "react"

import IconButton from './IconButton'

export default class IconButtonContainer extends React.Component {

    render() {

        const {
            onPress,
            type="default",
            icon=true,
        } = this.props

        return (
            <IconButton
                onPress={onPress}
                type={type}
                icon={icon}
            />
        )
    }
}
