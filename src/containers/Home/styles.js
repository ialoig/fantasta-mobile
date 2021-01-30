
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    buttonsView: {
        flex: 2,
        margin: 30,
        marginBottom: 0,
        alignSelf: 'stretch'
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
    listView: {
        flex: 4,
        margin: 30,
        marginTop: 0,
        backgroundColor: '#FBCB3A',
        alignSelf: 'stretch'
    },
    list: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch'
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
