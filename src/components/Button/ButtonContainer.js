
import React from "react";

import Button from './Button'

export default class ButtonContainer extends React.Component {

    render() {

        const {
            onPress,
            buttonStyle,
            textStyle,
            title='',
            type='primary',
            size='large'
        } = this.props

        return (
            <Button
                onPress={onPress}
                buttonStyle={buttonStyle}
                textStyle={textStyle}
                title={title}
                type={type}
                size={size}
            />
        )
    }
}
