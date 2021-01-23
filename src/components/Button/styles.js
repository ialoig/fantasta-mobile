import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const button = StyleSheet.create({
    button: {
        margin: 8,
        padding: 8,
        borderRadius: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    large: {
        width: '100%',
        height: 48
    },
    small: {
        width: '50%',
        height: 24
    },
    primary: {
        backgroundColor: colors.primary,
    },
    secondary: {
        backgroundColor: colors.white,
    },
    border: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.primary
    }
});

export const text = StyleSheet.create({
    text: {
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
    },
    large: {
        fontSize: 20,
    },
    small: {
        fontSize: 12,
    }
});