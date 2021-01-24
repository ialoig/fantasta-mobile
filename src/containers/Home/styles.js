
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: 20
    },
    buttonsView: {
        flex: 2,
        margin: 10,
        marginBottom: 0,
        alignSelf: 'center',
        width: '100%',
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    buttonCrea: {
        backgroundColor: '#1FCC79',
        alignSelf: 'center',
        width: '45%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonJoin: {
        backgroundColor: '#87D4F4',
        alignSelf: 'center',
        width: '45%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    list: {
        flex: 4,
        margin: 10,
        padding: 20,
        marginTop: 0,
        width: '100%',
        backgroundColor: '#FBCB3A',
        alignSelf: 'center'
    },
    leaguesTitle: {
        marginBottom: 20
    },
    league: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    imageTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    leagueImage: {
        width: 40,
        height: 40
    },
    title: {
        marginLeft: 30
    },
    openLeague: {

    }
});
