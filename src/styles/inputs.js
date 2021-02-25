import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
    container: {
        paddingVertical: 0,
        width: "100%"
    },
    inputForm: {
        minHeight: 56,
        marginTop: 8,
        paddingTop: 2,
        borderRadius: 40,
        backgroundColor: colors.greyLight,
        paddingHorizontal: 32,
        textAlignVertical: "center"
    },
    isValid: {
        backgroundColor: colors.successGreen,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: colors.primary
    },
    hasError: {
        marginTop: 2,
        borderStyle: "solid",
        borderWidth: 1,
        backgroundColor: colors.errorRedBg,
        borderColor: colors.errorRed,
    },
    inputError: {
        color: colors.errorRed
    }

});