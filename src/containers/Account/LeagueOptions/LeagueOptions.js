import React from 'react'

import { View } from "react-native"
import { commonStyle } from "../../../styles"
import I18n from "i18n-js"

import { Card, Header} from "../../../components"
import { useNavigation } from '@react-navigation/native'

function LeagueOptions() {

    //hook which give access to the navigation object from the component directly
    const navigation = useNavigation();

    return (
        <View style={commonStyle.container}>
        { /** header */}
        <Header title="account_details" backButton="true" onPress={() => navigation.goBack()}/>

            <View style={commonStyle.content}>
            { /** language */}
                <Card
                    onPress={() => navigation.navigate("Language")}
                    title={I18n.translate("language")}
                    description={""}
                    type='small'
                    arrow='true'
                />
            </View>
        </View>
    )
}

export default LeagueOptions

