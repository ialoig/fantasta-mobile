import { StyleSheet } from "react-native";

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
  buttonsContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  login: {
    height: '8vh',
    margin: '2vh',
    color: "#1FCC79",
    fontSize: 14,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    alignSelf: "center"
  }
});
