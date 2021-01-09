import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import buttonStyles from '../../styles/buttons'

const Button = (props) => {

    let buttonStyle = buttonStyles.button
    let textStyle = buttonStyles.text

    if ( props.type ) {
        buttonStyle = StyleSheet.compose( buttonStyle, buttonStyles[props.type+'_button'] || buttonStyles['primary_button'] )
        textStyle = StyleSheet.compose( textStyle, buttonStyles[props.type+'_text'] || buttonStyles['primary_text'] )
    }

    if ( props.size ) {
        buttonStyle = StyleSheet.compose( buttonStyle, buttonStyles[props.size+'_button'] || buttonStyles['large_button'] )
    }

    return (
        <TouchableOpacity onPress={props.onPress} style={buttonStyle}>
            <Text style={textStyle}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default Button
