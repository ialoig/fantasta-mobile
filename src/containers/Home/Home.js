
import React from "react"
import { Text, View } from "react-native"

import styles from "./styles";
import { Styles } from '../../styles'

const Home = (props) => {
    return (
        <View style={Styles.Commons.container}>
            <View style={Styles.Commons.content}>
                <Text>Home</Text>
            </View>
        </View>
    )
}

export default Home
