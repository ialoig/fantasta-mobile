import { StyleSheet } from "react-native";

export default StyleSheet.create({
    
    inputForm: {
        margin: '15px',
        padding: 0,
        borderWidth: 1,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderColor: 'grey',
        height: 30,
        borderRadius: 8,
        border: '2px solid',
        boxSizing: 'border-box',
        borderRadius: '16px'
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
        marginTop: '-10px',
        color: '#FF6464',
        fontSize: 'x-small'
    }

});