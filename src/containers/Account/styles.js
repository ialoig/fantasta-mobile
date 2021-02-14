import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
		marginTop: 56,
		marginBottom: 12,
        marginHorizontal: 24,
        flexDirection: 'row',
    },
    title: {
        flex: 1,
        flexGrow: 1,
        justifyContent: "center",
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    cardContent: {
		flex: 1,
        justifyContent: "flex-start"
    }
})