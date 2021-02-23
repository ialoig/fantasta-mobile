
import React from "react"
import { TouchableOpacity, Image, View } from "react-native"

import { button } from "./styles"

const IconButton = (props) => {

    const { type, icon } = props
    let icon_img = require('../../../assets/img/icons/prev.png')

    const handleIconType = (type) => {
        switch (type) {
            case "back":
                return require("../../../assets/img/icons/prev.png");
            case "account":
                return require("../../../assets/img/icons/user_24.png");
            default:
                return require("../../../assets/img/icons/prev.png");
        }
    }

    return (
        <TouchableOpacity onPress={props.onPress} style={[button[type]]}>
            <View >
                {icon && <Image source={handleIconType(type)} />}
            </View>
        </TouchableOpacity>
    )
}

export default IconButton
