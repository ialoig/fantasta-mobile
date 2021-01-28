
import React from "react"
import { Text, View } from "react-native"
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'

import styles from './styles'

const Radio = (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <RadioForm
                formHorizontal={false}
                animation={true}
            >
                {
                    props.items.map((obj, i) => (
                        <RadioButton
                            key={i}
                            labelHorizontal={true}
                            style={styles.radioButton}
                        >
                            <RadioButtonLabel
                                obj={obj}
                                index={i}
                                labelHorizontal={false}
                                onPress={props.onChange}
                                labelStyle={styles.radioLabel}
                            />
                            <RadioButtonInput
                                obj={obj}
                                index={i}
                                isSelected={props.value==obj.value}
                                onPress={props.onChange}
                                borderWidth={1}
                                buttonInnerColor={'#1FCC79'}
                                buttonOuterColor={'#1FCC79'}
                                buttonSize={20}
                                buttonOuterSize={25}
                                buttonWrapStyle={styles.radioInput}
                            />
                        </RadioButton>
                    ))
                }  
            </RadioForm>
        </View>
    )
}

export default Radio
