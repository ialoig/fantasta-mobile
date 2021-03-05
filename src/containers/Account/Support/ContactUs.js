import React from 'react'

import { View } from "react-native"
import { commonStyle } from "../../../styles"

import { Header } from "../../../components"
import styles from "../styles"
import { useNavigation } from '@react-navigation/native'

function ContactUs() {

    //hook which give access to the navigation object from the component directly
    const navigation = useNavigation();

    return (
        <View style={commonStyle.container}>
            { /** header */}
            <Header title="contact" backButton={true} onPressBack={() => navigation.goBack()}/>

            <View style={styles.cardContent}>

            </View>
        </View>
    )
}

export default ContactUs

