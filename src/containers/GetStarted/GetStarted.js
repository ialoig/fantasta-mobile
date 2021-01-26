import React from 'react';
import { View, Text, Image } from "react-native";

import styles from "./styles";
import commonStyle from "../../styles/styles";

function GetStarted({ item, key }) {

    return (
        <View style={commonStyle.container} key={key}>
            <View style={commonStyle.content} key={key}>
                <Image source={item.image} />
            </View>
            <View style={commonStyle.flex} key={key}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

export default GetStarted
