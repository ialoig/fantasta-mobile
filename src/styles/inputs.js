import { StyleSheet } from "react-native";

export default StyleSheet.create({
    inptView: {
        width: '100%'
    },
    inputForm: {
        marginTop: 10,
        marginBottom: 15,
        height: 40,
        width: '100%',
        borderRadius: 40,
        paddingHorizontal: 10,
        border: '2px solid grey',
        boxSizing: 'border-box',
        backgroundColor: '#FFFFFF',
    },
    isValid: {
        backgroundColor: '#F2FFFB',
        border: '2px solid #1FCC79',
    },
    hasError: {
        backgroundColor: '#FFF3F8',
        border: '2px solid #FF6464'
    },
    inputError: {
        marginLeft: '15px',
        marginTop: '-15px',
        color: '#FF6464',
        fontSize: 'x-small'
    }

});