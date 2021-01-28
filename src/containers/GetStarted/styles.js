import { StyleSheet } from 'react-native';
import colors from "../../styles/colors";

export default StyleSheet.create({
    title: {
        fontFamily: "PoppinsSemiBold",
        fontSize: 22,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 30,
        letterSpacing: 0.75,
        textAlign: "center",
        color: colors.text
    },
    description: {
        fontFamily: "PoppinsMedium",
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0.25,
        textAlign: "center",
        color: colors.textPlaceholder
    }
})