
import React from "react"
import { Text, View } from "react-native"
import AppIntroSlider from 'react-native-app-intro-slider'
import I18n from 'i18n-js'

import styles from "./styles";
import { Styles } from '../../styles'
import { button, text} from "../../components/Button/styles"

const Create = (props) => {

    const renderNextButton = () => {
        return (
            <View style={[button.button, button.large, button.primary, Styles.commonStyle.content]}>
                <Text style={[text.text, text.large, text.primary]}>{I18n.translate('next')}</Text>
            </View>
        )
    }
    
    const renderDoneButton = () => {
        return (
            <View style={[button.button, button.large, button.primary, Styles.commonStyle.content]}>
                <Text style={[text.text, text.large, text.primary]}>{I18n.translate('create')}</Text>
            </View>
        )
    }
    
    const Crea = ({ item, key }) => {
    
        const Page = item.component
    
        return (
            <View style={styles.container} key={key}>
                <View style={styles.content}>
                    <Text style={styles.title}>{I18n.translate(item.title)}</Text>
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
            renderItem={Crea}
            data={props.pages}
            bottomButton
            onDone={props.onDone}
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
            renderNextButton={renderNextButton}
            renderDoneButton={renderDoneButton}
        />
    )
}

export default Create
