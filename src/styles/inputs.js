import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
    inptView: {
        width: '100%'
    },
    inputForm: {
        marginTop: '2vh',
        marginBottom: '2.5vh',
        height: '8vh',
        width: '100%',
        borderRadius: 40,
        paddingHorizontal: 10,
        border: '2px solid grey',
        boxSizing: 'border-box',
        backgroundColor: '#FFFFFF',
    },
    isValid: {
        backgroundColor: colors.successGreen,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: colors.primary
    },
    hasError: {  
        backgroundColor: colors.errorRedBg,
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 32,
        borderColor: colors.errorRed
    },
    inputError: {
        marginLeft: '15px',
        marginTop: '-15px',
        color: '#FF6464',
        fontSize: 'x-small'
    }

});