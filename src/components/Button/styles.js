import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const button = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 40,
        marginTop: 12
    },
    large: {
        minWidth: 327,
        minHeight: 56,
        maxHeight: 56
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
    alert: {
        backgroundColor: colors.errorRed,
    },
    border: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.primary
    }
});

export const text = StyleSheet.create({
    primary: {
        textAlign: "center",
        color: colors.white
    },
    secondary: {
        textAlign: "center",
        color: colors.primary
    },
    alert: {
        textAlign: "center",
        color: colors.white
    },
    large: {
        fontSize: 20,
    },
    small: {
        fontSize: 12,
    }
});