
import React from "react"
import { Button, Text, View } from "react-native"
import AppIntroSlider from 'react-native-app-intro-slider'

import styles from "./styles";
import { Styles } from '../../styles'

const Create = (props) => {

    const renderPrevButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Text>PREV</Text>
            </View>
        )
    }

    const renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Text>NEXT</Text>
            </View>
        )
    }
    
    const renderDoneButton = () => {
        return (
            <View style={styles.buttonContainer}>
                <Button
                    title={'Get Started!'} //GL TODO: set translate
                    type='primary'
                    size='large'
                />
            </View>
        )
    }
    
    const Crea = ({ item, key }) => {
    
        const Page = item.component
    
        return (
            <View style={styles.container} key={key}>
                <View style={styles.image}>
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>

                    <Page
                        item={item}
                        {...props}
                    />
                </View>
            </View>
        )
    }

    return (
        <AppIntroSlider
            // renderItem={item => { return ( <Crea item {...props} /> ) }}
            renderItem={Crea}
            data={props.pages}
            bottomButton="true" //show button on bottom side
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
            showPrevButton={true}
            renderPrevButton={renderPrevButton}
            renderNextButton={renderNextButton}
            renderDoneButton={renderDoneButton}
        />
    )
}

export default Create
