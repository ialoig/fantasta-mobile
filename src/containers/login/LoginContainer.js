import React from "react";
import { View } from "react-native";
import Login from "./Login";

export default class LoginContainer extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor (props) {
        super(props)

        this.state = {
            username: "Username",
            password: "Password"
        };
    }

    render() {
        return (
            <View>
                <Login username={this.state.username} password={this.state.password}/>
            </View>
        )
    }
}
