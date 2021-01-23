
import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
  },
  header: {
    flex: 1,
    minWidth: 327,
    minHeight: 200,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    flexGrow: 0,
    flexShrink: 1,
  },
  formContainer: {
    flex: 1,
    minWidth: 327,
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 2,
    flexShrink: 1,
  },
  forgot: {
    position: "relative",
    minWidth: 100,
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 36,
    fontFamily: "PoppinsMedium",
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0.25,
    color: colors.text,
  },
  buttonContainer: {
    flex: 1,
    minWidth: 327,
    minHeight: 100,
    alignItems: 'center',
    flexGrow: 0,
  }
});
