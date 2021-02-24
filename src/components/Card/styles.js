import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export const card = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        marginTop: 12,
        //paddingHorizontal: 24,
        //paddingVertical: 16,
        backgroundColor: colors.greyLight
    },
    default: {
        minWidth: 327,
        maxHeight: 180
    },
    large: {
        flexDirection: "row",
        minWidth: 327,
        maxHeight: 180
    },
    medium: {
        flexDirection: "row",
        minWidth: 327,
        maxHeight: 110
    },
    small: {
        flexDirection: "row",
        //minWidth: 327,
        marginHorizontal: ((2/375) * deviceWidth),
        //maxHeight: 65
        paddingHorizontal: ((20/375) * deviceWidth),
        paddingVertical: ((10/375) * deviceWidth)
    },
    square: {
        maxWidth: 140,
        minHeight: 140
    },
    arrow: {
        alignItems: "flex-end"
    }
});


export const image = StyleSheet.create({
    default: {
        //marginRight: 12
    },
    large: {
        marginRight: 12
    },
    medium: {
        marginRight: 12
    },
    small: {
        marginRight: 12
    }
});



export const text = StyleSheet.create({
    default: {
        alignItems: "center",
        paddingTop: 12
    },    
    square: {
        alignItems: "center",
        paddingTop: 12
    }
});