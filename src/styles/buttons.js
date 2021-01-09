import { StyleSheet } from "react-native";

export default StyleSheet.create({
    button: {
        margin: '1vh',
        borderRadius: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: '100%',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600'
    },
    large_button: {
        width: '100%',
        height: '8vh'
    },
    small_button: {
        width: '50%',
        height: '4vh'
    },
    primary_button: {
        backgroundColor: '#1FCC79',
    },
    primary_text: {
        color: "#FFFFFF"
    },
    secondary_button: {
        backgroundColor: '#FFFFFF',
        border: '1px solid #1FCC79'
    },
    secondary_text: {
        color: "#1FCC79"
    }
});