import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { View } from "react-native"
import { Header } from "../../../components"

import { commonStyle } from "../../../styles"

function DeleteAccount() {

    //hook which give access to the navigation object from the component directly
    const navigation = useNavigation();

    return (
        <View style={commonStyle.container}>
            { /** header */}
            <Header title="change_email" backButton="false" onPress={() => navigation.goBack()}/>

        </View>
    )
}

export default DeleteAccount
