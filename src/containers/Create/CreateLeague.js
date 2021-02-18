
import React from "react"
import { View } from "react-native"
import I18n from 'i18n-js'

import { InputText, NumberInc, Radio } from '../../components'
import styles from './styles'

const CreateLeague = (props) => {
    return (
        <View style={styles.inputs}>
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
                label={I18n.translate('nParticipants')}
                value={props.settings[props.participantsId]}
                step={1}
                min={2}
                onChange={value => props.onChange( props.participantsId, value )} 
            />
            <Radio 
                label={I18n.translate('tipology')}
                value={props.settings[props.tipologyId]}
                items={[
                    { label: I18n.translate(props.tipology.CLASSIC), value: props.tipology.CLASSIC },
                    { label: I18n.translate(props.tipology.MANTRA), value: props.tipology.MANTRA }
                ]}
                onChange={value => props.onChange( props.tipologyId, value )} 
            />
        </View>
    )
}

export default CreateLeague
