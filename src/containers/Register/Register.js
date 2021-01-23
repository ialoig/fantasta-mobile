import React from "react"
import { View } from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import I18n from 'i18n-js'

import styles from "./styles"
import { Styles } from '../../styles'

import { Button, Email, Logo, Password, RepeatPassword } from '../../components'

const Register = (props) => {
    return (
        <KeyboardAwareScrollView
            contentContainerStyle={Styles.Commons.container}
            scrollEnabled={false}
            resetScrollToCoords={{ x: 0, y: 0 }}
        >
            <View style={Styles.Commons.content}>
                <View style={Styles.Login.logo}>
                    <Logo />
                </View>

                <View style={Styles.Login.form}>
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

                    <RepeatPassword
                        id={props.repeatPasswordId}
                        label={I18n.translate('repeatPassword')}
                        placeholder={I18n.translate('repeatPassword')}
                        password={props.password}
                        showError={props.showError}
                        required={true}
                        minLength={6}
                        clearButtonMode='never'
                        onChange={props.onChange}
                    />
                </View>

                <View style={Styles.Login.buttonsContainer}>
                <Button
                    title={I18n.translate('register')}
                    onPress={props.Register}
                    type='primary'
                    size='large'
                />
                <Button
                    title={I18n.translate('login')}
                    onPress={props.login}
                    type='secondary'
                    size='large'
                    border={false}
                />
            </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default Register
