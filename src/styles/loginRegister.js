
import { Dimensions, StyleSheet } from "react-native";

const window = Dimensions.get('window');
const IMAGE_HEIGHT = window.width / 5;

export default StyleSheet.create({
    logo: {
        height: IMAGE_HEIGHT,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 30
    },
    form: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    buttonsContainer: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});