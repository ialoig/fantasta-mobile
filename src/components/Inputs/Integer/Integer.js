import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import styles from "./styles"
import inputStyles from '../../../styles/inputs'

const Integer = (props) => {

    let viewStyle = StyleSheet.compose( inputStyles.inputForm, props.isValid ? inputStyles.isValid : props.hasError ? inputStyles.hasError : {} )

    return (
        <View>
            {/* <Text>{props.label}</Text> */}
            <TextInput
                {...props}
                style={viewStyle}
                ref={(ref)=> { props.onRef(ref) }}
                keyboardType='numeric'
            />
            { props.hasError ? <Text style={inputStyles.inputError}>{props.error}</Text> : null }
        </View>
    )
}

export default Integer
