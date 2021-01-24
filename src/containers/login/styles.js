
import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
    minWidth: 350
  },
  header: {
    flex: 1,
    //minHeight: 100,
    //justifyContent: 'flex-start',
    marginTop: 24,
    paddingTop: 56
  },
  formContainer: {
    flex: 1,
    //minHeight: 200,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: 36
  },
  keyboardContainer: {
    flex: 1
  },
  forgot: {
    flex: 1,
    alignSelf: 'flex-end',
    paddingVertical: 12,
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 24
  }
});
