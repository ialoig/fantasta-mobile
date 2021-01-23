
import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'stretch',
        margin: 40,
        color: colors.text
    },
    content: {
        flex: 1,
        //flexDirection: 'column',
        //alignItems: 'stretch',
        //color: colors.text
    }
});