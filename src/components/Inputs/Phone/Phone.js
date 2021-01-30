
import React from "react"
import { Text, TextInput, View } from "react-native"

import inputStyles from '../../../styles/inputs'

const Phone = (props) => {

    return (
        <View style={inputStyles.inptView}>
            <TextInput
                {...props}
                style={inputStyles.inputForm, props.hasError ? inputStyles.hasError : null}
                ref={(ref)=> { props.onRef(ref) }}
                keyboardType='phone-pad'
            />
            { props.hasError ? <Text style={inputStyles.inputError}>{props.error}</Text> : null }
        </View>
    )
}

export default Phone
