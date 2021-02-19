import React, { useState } from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'
import I18n from "i18n-js"
import { Auth } from '../../../services'
import { View } from "react-native"
import { Button, InputText, Header } from "../../../components"

import { commonStyle } from "../../../styles"

function UsernameSettings() {

    //hook which give access to the navigation object from the component directly
    const navigation = useNavigation();
    const route = useRoute();
    //gettin username from route
    const { username } = route.params

    const [newUsername, setNewUsername] = useState(username)
    const [error, setError] = useState(false)

    return (
        <View style={[commonStyle.container, commonStyle.flex_start]}>
            { /** header */}
            <Header title="change_username" backButton="false" onPress={() => navigation.goBack()}/>

            <InputText
                id="name"
                label={I18n.translate('leagueName')}
                value={username}
                onChange={(id, value) => {
                    setNewUsername(value)
                }}
            />

            <Button
                title={I18n.translate('save')}
                onPress={
                    async() => {
                        if ( !newUsername ) {
                            return setError(true)
                        }

                        try
                        {
                            await Auth.update(null, newUsername) 
                            navigation.navigate("AccountDetails", {username: newUsername})
                        }
                        catch (error) {
                            console.log("error:" +err)
                        }
                }}
                type='primary'
                size='large'
            />

        </View>
    )
}

export default UsernameSettings
