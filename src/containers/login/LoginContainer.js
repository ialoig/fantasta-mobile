import React from "react";
import { View } from "react-native";
import Login from "./Login";

export class LoginContainer extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor (props) {
        super(props)

        this.state = {}
    }

    onChange ( id, value, valid ) {
        console.log(id)
        console.log(value)
        console.log(valid)
    }


    render() {
        return (
            <View>
                <Login onChange={this.onChange.bind(this)} />
            </View>
        )
    }
}
