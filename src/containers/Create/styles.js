
import { StyleSheet } from 'react-native'
import colors from "../../styles/colors"

export default StyleSheet.create({
    container: {
    	justifyContent: 'center',
        alignItems: 'center',
    	marginHorizontal: 12,
        minWidth: 350
    },
    content: {
        width: '60%',
        marginTop: 150
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
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 24
    },
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
    }
})