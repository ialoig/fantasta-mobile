import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
    
    inputForm: {
        backgroundColor: colors.greyLight,
        width: 327,
        height: 64,
        borderRadius: 32
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
        borderRadius: 32,
        borderColor: colors.errorRed
    },
    inputError: {
        marginLeft: '15px',
        marginTop: '-10px',
        fontFamily: "PoppinsRegular",
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 22,
        letterSpacing: 0.25,
        textAlign: "left",
        color: colors.errorRed
    }

});