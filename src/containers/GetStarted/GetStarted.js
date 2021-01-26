import React from 'react';
import { View, Text, Image } from "react-native";

import styles from "./styles";
import commonStyle from "../../styles/styles";

function GetStarted({ item, key }) {

    return (
        <View style={styles.container} key={key}>
            <View style={styles.image} key={key}>
                <Image source={item.image} />
            </View>
            <View style={styles.content} key={key}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

export default GetStarted
