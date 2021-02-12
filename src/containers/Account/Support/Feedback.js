import React, { Component } from 'react'

import { View, Text } from "react-native"
import { commonStyle, textStyles } from "../../../styles"
import I18n from "i18n-js"

import { Card, PrevButton} from "../../../components"
import styles from "../styles"

function Feedback({navigation}) {
    return (
        <View style={commonStyle.container}>
            { /** header */}
            <View style={styles.header}>
                <PrevButton onPress={() => navigation.goBack()} icon="true" />
                <Text style={[textStyles.h1, styles.title]}>{I18n.translate("support")}</Text>
            </View>

            <View style={commonStyle.content}>
                { /** Feedback */}
                <Card
                    onPress={() => navigation.navigate("Language")}
                    title={I18n.translate("feedback")}
                    description={I18n.translate("feedback_descr")}
                    type='small'
                    arrow='true'
                />
            </View>
        </View>
    )
}

export default Feedback

