import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
    inptView: {
        width: '100%'
    },
    inputForm: {
        fontFamily: "PoppinsRegular", 
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 28,
        letterSpacing: 0.75,
        color: colors.text,
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
        backgroundColor: colors.errorRedBg,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: colors.errorRed,
    },
    inputError: {
        fontFamily: "PoppinsMedium",
        fontSize: 12,
        fontWeight: "500",
        lineHeight: 22,
        letterSpacing: 0.25,
        color: colors.errorRed
    }

});