
import React from "react"
import { Text, View } from "react-native"

import styles from "./styles"
import { Styles } from '../../styles'

const StartPage = (props) => {
    return (
        <View style={Styles.Commons.container}>
            <View style={Styles.Commons.content}>
                <Text>Start</Text>
            </View>
        </View>
    )
}

export default StartPage
