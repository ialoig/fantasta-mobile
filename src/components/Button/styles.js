import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const button = StyleSheet.create({
    button: {
        flex: 1,
        borderRadius: 40,
        marginHorizontal: 16,
        alignItems: 'center',
        marginVertical: 12
    },
    large: {
        minWidth: 327,
        minHeight: 56
    },
    small: {
        minWidth: 156,
        minHeight: 54
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
        fontFamily: "PoppinsRegular",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 28,
        letterSpacing: 0.75,
        textAlign: "center"
    },
    primary: {
        color: colors.white
    },
    secondary: {
        color: colors.primary
    }
});