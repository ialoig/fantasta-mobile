import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import styles from "./styles"
import inputStyles from '../../../styles/inputs'

const RepeatPassword = (props) => {

    let viewStyle = StyleSheet.compose( inputStyles.inputForm, props.hasError ? inputStyles.hasError : {} )

    return (
        <View style={inputStyles.inptView}>
            {/* <Text>{props.label}</Text> */}
            <TextInput
                {...props}
                style={viewStyle}
                ref={(ref)=> { props.onRef(ref) }}
                keyboardType='default'
                secureTextEntry={true}
            />
            { props.hasError ? <Text style={inputStyles.inputError}>{props.error}</Text> : null }
        </View>
    )
}

export default RepeatPassword
