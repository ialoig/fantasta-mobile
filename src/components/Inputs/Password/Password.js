
import React from "react"
import { Text, TextInput, View } from "react-native"

import { inputStyle } from '../../../styles'

const Password = (props) => {

    return (
        <View style={inputStyle.inptView}>
            <TextInput
                {...props}
                style={inputStyle.inputForm, props.hasError ? inputStyle.hasError : null}
                ref={(ref)=> { props.onRef(ref) }}
                keyboardType='default'
                secureTextEntry={true}
            />
            { props.hasError ? <Text style={inputStyle.inputError}>{props.error}</Text> : null }
        </View>
    )
}

export default Password
