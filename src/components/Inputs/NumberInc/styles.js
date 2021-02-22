import { StyleSheet } from "react-native";
import { COLORS } from '../../../styles'

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        height: 40
    },
    label: {
        fontSize: 16,
        width: '60%'
    },
    input: {
        width: 32,
        height: 32,
        borderRadius: 50,
        backgroundColor: COLORS.white
    },
    buttonStyle: {
        width: 32,
        height: 32,
        borderRadius: 50,
        backgroundColor: COLORS.greyLight
    }
});
