
import { Dimensions, StyleSheet } from "react-native";

const window = Dimensions.get('window');
const IMAGE_HEIGHT = window.width / 5;

export default StyleSheet.create({
    logo: {
        //height: IMAGE_HEIGHT,
        //flex: 1,
        //alignItems: 'center',
        //flexDirection: 'column',
        //justifyContent: 'center',
        //margin: 30,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 100,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        //flex: 3,
        //flexDirection: 'column',
        //justifyContent: 'flex-start',
        //alignItems: 'center'
        flex: 1,
        paddingTop: 32,
        paddingHorizontal: 16,
    },
    //buttonsContainer: {
    //    flex: 2,
    //    flexDirection: 'column',
    //    justifyContent: 'center',
    //    alignItems: 'center'
    //},
    formContainer: {
        flex: 1,
        paddingTop: 32,
        paddingHorizontal: 16,
    }
});