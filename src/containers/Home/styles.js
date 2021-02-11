
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
        backgroundColor: '#F4F5F7',
        alignSelf: 'center',
        width: '45%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16
    },
    buttonJoin: {
        backgroundColor: '#F4F5F7',
        alignSelf: 'center',
        width: '45%',
        height: '70%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16
    },
    buttonImage: {
        alignSelf: 'center'
    },
    listView: {
        flex: 4,
        margin: 30,
        marginTop: -10
    },
    list: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    leaguesTitle: {
        marginBottom: 10,
        fontFamily: "PoppinsRegular",
        fontSize: 20,
        fontWeight: "normal",
        fontStyle: "normal"
    },
    league: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F5F7',
        borderRadius: 16,
        marginBottom: 10,
        height: 65
    },
    imageTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    leagueImage: {
        width: 40,
        height: 40,
        marginLeft: 20
    },
    title: {
        marginLeft: 30
    },
    subTitle: {
        marginLeft: 30
    },
    openLeague: {
        marginRight: 20
    }
});
