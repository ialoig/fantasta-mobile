import { StyleSheet } from "react-native";

export default StyleSheet.create({
  logo: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  form: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  forgot: {
    alignSelf: 'flex-end',
    marginTop: 20,
    textDecorationLine: 'underline'
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  loginButton: {
    backgroundColor: "#1FCC79",
  },
  loginText: {
    color: "#FFFFFF"
  },
  registerButton: {
    backgroundColor: "#FFFFFF",
    border: '1px solid #1FCC79'
  },
  registerText: {
    color: "#1FCC79"
  },
});
