import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const card = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 12,
        borderRadius: 16,
        paddingHorizontal: 24,
        paddingVertical: 16,
        backgroundColor: colors.greyLight
    },
    default: {
        minWidth: 327,
        maxHeight: 180
    },
    large: {
        minWidth: 327,
        maxHeight: 180
    },
    medium: {
        minWidth: 327,
        maxHeight: 110
    },
    small: {
        minWidth: 327,
        maxHeight: 65
    },
    text: {
    },
    arrow: {
        flex: 1,
        alignItems: "flex-end"
    }
});


export const image = StyleSheet.create({
    forward: {
    }
});