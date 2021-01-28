import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import styles from "./styles"
import { inputs } from '../../../styles'

const RepeatPassword = (props) => {

    let viewStyle = StyleSheet.compose( inputs.inputForm, props.hasError ? inputs.hasError : {} )

    return (
        <View style={inputs.inptView}>
            {/* <Text>{props.label}</Text> */}
            <TextInput
                {...props}
                style={viewStyle}
                ref={(ref)=> { props.onRef(ref) }}
                keyboardType='default'
                secureTextEntry={true}
            />
            { props.hasError ? <Text style={inputs.inputError}>{props.error}</Text> : null }
        </View>
    )
}

export default RepeatPassword
