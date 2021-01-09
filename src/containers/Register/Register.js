import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import I18n from 'react-native-i18n'

import styles from "./styles"
import commonStyles from '../../styles/styles'

import { Button, InputPassword, InputEmail, Logo } from '../../components'

const Register = (props) => {
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

                <InputPassword
                    id={props.repeatPasswordId}
                    label={I18n.translate('repeatPassword')}
                    placeholder={I18n.translate('repeatPassword')}
                    showError={props.showError}
                    required={true}
                    minLength={6}
                    clearButtonMode='never'
                    onChange={props.onChange}
                />
            </View>

            <View style={styles.buttonsContainer}>
                <Button
                    title={I18n.translate('register')}
                    onPress={props.Register}
                    type='primary'
                    size='large'
                />
                <Text style={styles.login} onPress={props.Login}>
                    {I18n.translate('login')}
                </Text>
            </View>
            
        </SafeAreaView>
    )
}

export default Register
