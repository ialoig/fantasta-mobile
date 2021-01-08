
import React from "react";

import Button from './Button'

export default class ButtonContainer extends React.Component {

    render() {

        const {
            onPress,
            buttonStyle,
            textStyle,
            title=''
        } = this.props

        return (
            <Button
                onPress={onPress}
                buttonStyle={buttonStyle}
                textStyle={textStyle}
                title={title}
            />
        )
    }
}
