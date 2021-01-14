import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
  logo: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 30
  },
  form: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  forgot: {
    alignSelf: 'flex-end',
    fontFamily: "PoppinsMedium",
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0.25,
    color: colors.text,
    marginTop: "10%",
    textDecorationLine: 'underline'
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
