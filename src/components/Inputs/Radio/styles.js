import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
    radioButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4
    },
    radioLabel: {
        marginVertical: 24
    },
    radio: {
        maxWidth: 32,
        maxHeight: 32,
        backgroundColor: colors.grey
    }
});
