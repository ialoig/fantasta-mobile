import React from 'react'

import { View } from "react-native"
import { Header } from "../../../components"

import { commonStyle } from "../../../styles"

function DeleteAccount() {
    return (

        <View style={commonStyle.container}>
            { /** header */}
            <Header title="change_email" backButton="false" onPress={() => navigation.goBack()}/>

        </View>
    )
}

export default DeleteAccount
