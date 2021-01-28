import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import styles from "./styles"
import { inputStyle } from '../../../styles'

const Password = (props) => {

    let viewStyle = StyleSheet.compose( inputStyle.inputForm, props.hasError ? inputStyle.hasError : {} )

    return (
        <View style={inputStyle.inptView}>
            {/* <Text>{props.label}</Text> */}
            <TextInput
                {...props}
                style={viewStyle}
                ref={(ref)=> { props.onRef(ref) }}
                keyboardType='default'
                secureTextEntry={true}
            />
            { props.hasError ? <Text style={inputStyle.inputError}>{props.error}</Text> : null }
        </View>
    )
}

export default Password
