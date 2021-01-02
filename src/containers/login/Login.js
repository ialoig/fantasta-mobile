import React from "react";
import { Text, View } from "react-native";

import styles from "./styles"

import { InputPassword, InputEmail } from '../../components'

const Login = (props) => {
    return (
        <View>
            <InputEmail
                id="email"
                label="Username"
                placeholder={"Email address"}
                required={true}
                clearButtonMode='while-editing'
                onChange={props.onChange}
            />
            
            <InputPassword
                id="password"
                label="Password"
                placeholder={'Password'}
                required={true}
                clearButtonMode='never'
                onChange={props.onChange}
            />
        </View>
    )
}

export default Login
