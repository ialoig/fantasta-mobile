import { StyleSheet } from "react-native";

export default StyleSheet.create({
    button: {
        height: '8vh',
        margin: '1vh',
        borderRadius: 40,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    text: {
        fontSize: 14,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        alignSelf: "center",
        textTransform: "uppercase"
    },
    large_button: {
        width: '100%',
    },
    small_button: {
        width: '50%',
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