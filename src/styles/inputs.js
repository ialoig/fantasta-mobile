import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
    inptView: {
        minWidth: 327
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
        marginTop: 8,
        borderStyle: "solid",
        borderWidth: 1,
        backgroundColor: colors.errorRedBg,
        borderColor: colors.errorRed,
    },
    inputError: {
        color: colors.errorRed
    }

});