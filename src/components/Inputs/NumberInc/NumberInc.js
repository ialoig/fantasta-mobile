
import React from "react"
import { Text, View } from "react-native"
import InputSpinner from "react-native-input-spinner"

import styles from "./styles"

const NumberInc = (props) => {

    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
            height: 60
        }}>
            <Text>{props.label}</Text>
            <View>
                <InputSpinner 
                    value={props.value}
                    append={<Text style={{width: 20}}></Text>}
                    prepend={<Text style={{width: 20}}></Text>}
                    step={props.step}
                    min={props.min}
                    max={props.max}
                    onChange={props.onChange} 
                    color={"#F4F5F7"}
                    buttonTextColor={'#3E5481'}
                    textColor={'#3E5481'}
                    background={'#F4F5F7'}
                    width={250}
                    inputStyle={{
                        borderRadius: 32,
                        minWidth: 80
                    }}
                />
            </View>
        </View>
    )
}

export default NumberInc
