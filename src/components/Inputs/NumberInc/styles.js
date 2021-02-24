import { StyleSheet } from "react-native";
import { COLORS } from '../../../styles'

export default StyleSheet.create({
    container: {
        //flex: 1,
        flexDirection: 'row',
        //justifyContent: "space-between",
        //alignContent: "center",
        //alignItems: 'center',
        paddingVertical: 12,
        //marginTop: 10,
        //height: 40
    },
    label: {
        //fontSize: 16,
        //width: '60%'
        alignSelf: "center",
    },
    input: {
        maxWidth: 32,
        maxHeight: 32,
        backgroundColor: COLORS.background
    },
    buttonStyle: {
        maxWidth: 32,
        maxHeight: 32,
        backgroundColor: COLORS.greyLight
    }
});
