import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const button = StyleSheet.create({
    button: {
        alignSelf: 'flex-start',
        flexDirection: "row",
        minWidth: 35,
        minHeight: 35,
        borderRadius: 40,
        backgroundColor: colors.primary
    }
});
