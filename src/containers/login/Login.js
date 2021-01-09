import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import I18n from 'react-native-i18n'

import styles from "./styles"
import commonStyles from '../../styles/styles'

import { Button, InputPassword, InputEmail, Logo } from '../../components'

const Login = (props) => {
    return (
        <SafeAreaView style={commonStyles.container}>

            <View style={styles.logo}>
                <Logo />
            </View>

            <View style={styles.form}>
                <InputEmail
                    id={props.emailId}
                    label={I18n.translate('email')}
                    placeholder={I18n.translate('email')}
                    showError={props.showError}
                    required={true}
                    clearButtonMode='while-editing'
                    onChange={props.onChange}
                />
                
                <InputPassword
                    id={props.passwordId}
                    label={I18n.translate('password')}
                    placeholder={I18n.translate('password')}
                    showError={props.showError}
                    required={true}
                    minLength={6}
                    clearButtonMode='never'
                    onChange={props.onChange}
                />

                <Text style={styles.forgot} onPress={() => props.ForgotPassword()}>
                    {I18n.translate('forgotPassword')}?
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <Button
                    title={I18n.translate('login')}
                    onPress={props.Login}
                    type='primary'
                    size='large'
                />
                <Button
                    title={I18n.translate('register')}
                    onPress={props.Register}
                    type='secondary'
                    size='large'
                />
            </View>
            
        </SafeAreaView>
    )
}

export default Login
