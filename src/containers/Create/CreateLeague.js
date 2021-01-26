
import React from "react"
import { View } from "react-native"
import I18n from 'i18n-js'

import { InputText } from '../../components'

import styles from "./styles"
import { Styles } from '../../styles'

const CreateLeague = (props) => {
    return (
        <View >
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
            </View>
        </View>
    )
}

export default CreateLeague
