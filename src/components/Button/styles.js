import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const button = StyleSheet.create({
    button: {
        margin: '1vh',
        borderRadius: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    large: {
        width: '100%',
        height: '56px'
    },
    small: {
        width: '50%',
        height: '4vh'
    },
    primary: {
        backgroundColor: colors.primary,
    },
    secondary: {
        backgroundColor: colors.white,
        border: '1px solid ' + colors.primary
    }
});

export const text = StyleSheet.create({
    text: {
        fontSize: '100%',
        fontFamily: 'PoppinsRegular',
        fontStyle: 'normal',
        lineHeight: 28,
        letterSpacing: 0.75,
        fontWeight: '400'
    },
    primary: {
        color: colors.white
    },
    secondary: {
        color: colors.primary
    }
});