
import { StyleSheet } from 'react-native'
import colors from "./colors"

export default StyleSheet.create({
    dotStyle: {
        width: 10,
        height: 8,
        borderRadius: 3,
        backgroundColor: colors.greenDisabled
    },
    activeDotStyle: {
        width: 30,
        height: 8,
        borderRadius: 3,
        backgroundColor: colors.primary
    },
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