
import React from "react"
import { Text, View } from "react-native"
import InputSpinner from "react-native-input-spinner"

import styles from "./styles"

const NumberInc = (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <InputSpinner 
                value={props.value}
                append={<Text style={{width: 10}}></Text>}
                prepend={<Text style={{width: 10}}></Text>}
                step={props.step}
                min={props.min}
                max={props.max}
                onChange={props.onChange} 
                color={"#F4F5F7"}
                buttonTextColor={'#3E5481'}
                textColor={'#3E5481'}
                background={'#F4F5F7'}
                inputStyle={styles.input}
            />
        </View>
    )
}

export default NumberInc
