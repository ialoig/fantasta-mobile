import React from 'react'

import { Text, TouchableOpacity, View } from "react-native"
import I18n from "i18n-js"
import { Card } from "../../components"
import { commonStyle, textStyles } from "../../styles"

const Account = props => {
    return (
        <View style={commonStyle.container}>
            <Text style={textStyles.h1}>{I18n.translate("account")}</Text>
            <Card 
                onPress={props.accountDetails}
                title={props.email}
                description={props.email}
                type='default'
                arrow='true'
            />
            <View>
                { /** settings */}
                <Card 
                    onPress={props.accountDetails}
                    title={I18n.translate("settings")}
                    description={I18n.translate("settings_descr")}
                    type='small'
                    arrow='true'
                />

                { /** leagues */}
                <Card 
                    onPress={props.accountDetails}
                    title={I18n.translate("league")}
                    description={I18n.translate("league_descr")}
                    type='small'
                    arrow='true'
                />

                { /** support */}
                <Card 
                    onPress={props.accountDetails}
                    title={I18n.translate("support")}
                    type='small'
                    arrow='true'
                />
            </View>
        </View>
    )
}

Account.propTypes = {

}

export default Account
