
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 150
    },
    header: {
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        flex: 3,
        marginTop: -30,
        margin: 30,
        alignItems: 'stretch'
    },
    inputs: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
    }
})