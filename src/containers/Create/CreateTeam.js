
import React from "react"
import { View } from "react-native"
import I18n from 'i18n-js'

import { InputText } from '../../components'

const CreateTeam = (props) => {
    return (
        <View>
            <InputText
                id={props.teamnameId}
                label={I18n.translate('teamName')}
                placeholder={I18n.translate('teamName')}
                onChange={props.onChange}
            />
        </View>
    )
}

export default CreateTeam
