import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        marginTop: 10
    },
    label: {
        fontSize: 16
    },
    radioButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    radioLabel: {
        fontSize: 14,
        color: '#3E5481'
    },
    radioInput: {
        marginLeft: 10
    }
});
