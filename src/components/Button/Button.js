import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import buttonStyles from '../../styles/buttons'

const Button = (props) => {

    let buttonStyle = StyleSheet.compose( buttonStyles.button, props.buttonStyle || {} )
    let textStyle = StyleSheet.compose( buttonStyles.text, props.textStyle || {} )

    return (
        <TouchableOpacity onPress={props.onPress} style={buttonStyle}>
            <Text style={textStyle}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default Button
