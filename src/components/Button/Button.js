
import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { button, text } from '../../styles/buttons'

const Button = (props) => {

    const { type, size } = props

    return (
        <TouchableOpacity onPress={props.onPress} style={[ button.button, button[type], button[size] ]}>
            <Text style={[ text.text, text[type] ]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default Button
