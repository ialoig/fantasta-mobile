import React from "react";
import { Text, View } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import I18n from 'i18n-js'

import styles from "./styles"
import commonStyles from '../../styles/styles'
import registerStyles from '../../styles/loginRegister'

import { Button, Password, Email, Logo } from '../../components'

const Login = (props) => {
    return (
        <KeyboardAwareScrollView
            contentContainerStyle={commonStyles.container}
            scrollEnabled={false}
            resetScrollToCoords={{ x: 0, y: 0 }}
        >
            <View style={commonStyles.content}>
                <View style={registerStyles.logo}>
                    <Logo />
                </View>

                <View style={registerStyles.form}>
                    <Email
                        id={props.emailId}
                        label={I18n.translate('email')}
                        placeholder={I18n.translate('email')}
                        showError={props.showError}
                        required={true}
                        clearButtonMode='while-editing'
                        onChange={props.onChange}
                    />
                    
                    <Password
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

                <View style={registerStyles.buttonsContainer}>
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
            </View>
        </KeyboardAwareScrollView>
    )
}

export default Login


