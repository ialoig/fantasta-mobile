
import React from "react"
import { Text, TouchableOpacity, Image, View } from "react-native"
import { commonStyle, textStyles } from "../../styles"

import { card, image, text } from "./styles"

const Card = (props) => {

    const { title, description, type, icon, arrow } = props
    let arrow_img = require('../../../assets/img/icons/forward.png')

    return (
        <TouchableOpacity onPress={props.onPress} style={[ card.card, card[type] ]}>
            { icon &&
                <View>
                    <Image style={image[type]} source={icon} />
                </View>
            }
            <View style={text[type]}>
                <Text style={[ textStyles.title ]}>{title}</Text>
                {description ? <Text style={[ textStyles.description ]}>{description}</Text> : null}
            </View>
            { arrow &&
                <View style={[commonStyle.flex, card.arrow]}>
                    <Image style={image.forward} source={arrow_img} />
                </View>
            }
        </TouchableOpacity>
    )
}

export default Card
