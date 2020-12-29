import React from "react";
import { Text, View } from "react-native";

import styles from "./styles"

const Login = (props) => {
    return (
        <View>
            <Text style={styles.textUsername}> {props.username}</Text>
            <Text style={styles.textPassword}> {props.password}</Text>
        </View>
    )
}

export default Login
