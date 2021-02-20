import React from 'react'

import { View } from "react-native"
import { commonStyle } from "../../../styles"
import I18n from "i18n-js"

import { Header, InputText, NumberInc, Radio } from '../../../components'
import { useNavigation } from '@react-navigation/native'

import { FIELDS_ID, TIPOLOGY } from "../../../constants"

function LeagueOptions(props) {

    //hook which give access to the navigation object from the component directly
    const navigation = useNavigation();

    return (
        <View style={[commonStyle.container, commonStyle.flex_start]}>
            { /** header */}
            <Header title="league_descr" backButton={true} onPress={() => navigation.goBack()}/>

            <InputText
                id={FIELDS_ID.leagueNameId}
                label={I18n.translate('leagueName')}
                placeholder={I18n.translate('leagueName')}
                onChange={""}
            />
            <InputText
                id={FIELDS_ID.passwordId}
                label={I18n.translate('password')}
                placeholder={I18n.translate('password')}
                onChange={""}
            />
            <NumberInc
                label={I18n.translate('nPartecipants')}
                value={""}
                step={1}
                min={2}
                onChange={""} 
            />
            <Radio 
                label={I18n.translate('tipology')}
                value={""}
                items={[
                    { label: I18n.translate(TIPOLOGY.CLASSIC), value: TIPOLOGY.CLASSIC },
                    { label: I18n.translate(TIPOLOGY.MANTRA), value: TIPOLOGY.MANTRA }
                ]}
                onChange={""} 
            />
        </View>
    )
}

export default LeagueOptions

