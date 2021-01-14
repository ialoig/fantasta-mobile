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
        //dimensions&style
        width: '100%',
        height: 64,
        marginTop: '6%',
        marginBottom: '4%',
        borderRadius: 40,
        backgroundColor: colors.greyLight,
        paddingHorizontal: "10%"
    },
    isValid: {
        backgroundColor: colors.successGreen,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: colors.primary
    },
    hasError: {  
        backgroundColor: colors.errorRedBg,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: colors.errorRed
    },
    inputError: {
        fontFamily: "PoppinsMedium",
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 22,
        letterSpacing: 0.25,
        color: colors.errorRed
    }

});