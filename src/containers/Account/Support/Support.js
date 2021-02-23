import React from 'react'

import { View } from "react-native"
import { commonStyle } from "../../../styles"
import I18n from "i18n-js"

import { Card, Header} from "../../../components"
import styles from "../styles"
import { useNavigation } from '@react-navigation/native'

function Support() {

    //hook which give access to the navigation object from the component directly
    const navigation = useNavigation();

    return (
        <View style={commonStyle.container}>
            { /** header */}
            <Header title="support" backButton={true} onPressBack={() => navigation.goBack()}/>

            <View style={styles.cardContent}>
                { /** Feedback */}
                <Card
                    onPress={() => navigation.navigate("Feedback")}
                    title={I18n.translate("feedback")}
                    description={I18n.translate("feedback_descr")}
                    type='small'
                    arrow={true}
                />
                { /** Contact */}
                <Card
                    onPress={() => navigation.navigate("Language")}
                    title={I18n.translate("contact")}
                    description={I18n.translate("contact_descr")}
                    type='small'
                    arrow={true}
                />
            </View>
        </View>
    )
}

export default Support

