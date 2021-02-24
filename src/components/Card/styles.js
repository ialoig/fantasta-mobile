import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { getHeight, getWidth } from "../../utils/pixelResolver";


export const card = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        marginTop: 12,
        backgroundColor: colors.greyLight
    },
    default: {
        marginHorizontal: 0,
        maxHeight: getHeight(180)
    },
    large: {
        marginHorizontal: 0,
        maxHeight: getHeight(160)
    },
    medium: {
        flexDirection: "row",
        marginHorizontal: 0,
        paddingHorizontal: getWidth(20),
        paddingVertical: getWidth(20),
        maxHeight: getHeight(120)
    },
    small: {
        flexDirection: "row",
        marginHorizontal: 0,
        paddingHorizontal: getWidth(20),
        paddingVertical: getWidth(20),
        maxHeight: getHeight(80)
    },
    square: {
        maxWidth: getWidth(150),
        height: getHeight(150),
    },
    arrow: {
        alignItems: "flex-end"
    }
});


export const image = StyleSheet.create({
    default: {
        
    },
    large: {
        
    },
    medium: {
        
    },
    small: {
        paddingRight: 12
    }
});



export const text = StyleSheet.create({
    default: {
        alignItems: "center",
        paddingTop: 12
    },
    large: {
        alignItems: "center",
        paddingTop: 12
    },
    square: {
        alignItems: "center",
        paddingTop: 12
    }
});