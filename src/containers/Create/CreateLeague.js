
import React from "react"
import { View } from "react-native"
import I18n from 'i18n-js'

import { InputText, NumberInc } from '../../components'

import styles from "./styles"
import { Styles } from '../../styles'

const CreateLeague = (props) => {
    return (
        <View>
            <InputText
                id={props.leagueNameId}
                label={I18n.translate('leagueName')}
                placeholder={I18n.translate('leagueName')}
                onChange={props.onChange}
            />
            <InputText
                id={props.passwordId}
                label={I18n.translate('password')}
                placeholder={I18n.translate('password')}
                onChange={props.onChange}
            />
            <NumberInc
                label={I18n.translate('nPartecipants')}
                value={props.settings[props.partecipantsId]}
                step={1}
                min={1}
                onChange={value => props.onChange( props.partecipantsId, value )} 
            />
        </View>
    )
}

export default CreateLeague
