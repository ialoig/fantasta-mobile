
import React from "react"
import { Text, View } from "react-native"
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'
import { commonStyle, textStyles } from "../../../styles"
import colors from "../../../styles/colors"

import styles from './styles'

const Radio = (props) => {

    return (
        <View style={commonStyle.flex_start}>
            <Text style={[textStyles.h2, styles.radioLabel]}>{props.label}</Text>
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
                                labelStyle={textStyles.body}
                            />
                            <RadioButtonInput
                                obj={obj}
                                index={i}
                                isSelected={props.value==obj.value}
                                onPress={props.onChange}
                                buttonInnerColor={colors.primary}
                                buttonOuterColor={colors.grey}
                                buttonSize={12}
                                buttonStyle={styles.radio}
                                buttonOuterSize={24}
                            />
                        </RadioButton>
                    ))
                }  
            </RadioForm>
        </View>
    )
}

export default Radio
