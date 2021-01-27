import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        height: 60
    },
    label: {
        fontSize: 16
    },
    input: {
        borderRadius: 32,
        minWidth: 80
    }
});
