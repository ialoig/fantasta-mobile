
import React from "react"
import { Text, TextInput, View } from "react-native"

import { inputStyle, textStyles } from '../../../styles'

const Email = (props) => {

    return (
        <View style={inputStyle.inptView}>
            <TextInput
                {...props}
                style={[textStyles.body, inputStyle.inputForm, props.hasError ? inputStyle.hasError : null]}
                ref={(ref)=> { props.onRef(ref) }}
                keyboardType='email-address'
            />
            { props.hasError ? <Text style={[textStyles.description, inputStyle.inputError]}>{props.error}</Text> : null }
        </View>
    )
}

export default Email
