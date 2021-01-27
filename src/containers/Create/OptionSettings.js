
import React from "react"
import { View } from "react-native"
import I18n from 'i18n-js'

import { NumberInc } from '../../components'

import styles from "./styles";
import { Styles } from '../../styles'

const OptionSettings = (props) => {
    return (
        <View>
            <NumberInc
                label={I18n.translate('countdown')}
                value={props.settings[props.countdownId]}
                step={1}
                min={1}
                onChange={value => props.onChange( props.countdownId, value )} 
            />
        </View>
    )
}

export default OptionSettings
