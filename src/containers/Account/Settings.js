import React, { Component } from 'react'

import { View, Text } from "react-native"
import { commonStyle, textStyles } from "../../styles"
import I18n from "i18n-js"

import { Card, PrevButton} from "../../components"

function Settings({navigation}) {
    return (
        <View style={commonStyle.container}>
            { /** header */}
            <View style={commonStyle.title}>
                <PrevButton onPress={() => navigation.goBack()} icon="true" />
                <Text style={textStyles.h1}>{"Settings"}</Text>
            </View>

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

export default Settings

