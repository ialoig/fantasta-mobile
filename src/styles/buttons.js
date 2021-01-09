import { StyleSheet } from "react-native";

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
        height: '8vh'
    },
    small: {
        width: '50%',
        height: '4vh'
    },
    primary: {
        backgroundColor: '#1FCC79',
    },
    secondary: {
        backgroundColor: '#FFFFFF',
        border: '1px solid #1FCC79'
    }
});

export const text = StyleSheet.create({
    text: {
        fontSize: '100%',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600'
    },
    primary: {
        color: "#FFFFFF"
    },
    secondary: {
        color: "#1FCC79"
    }
});