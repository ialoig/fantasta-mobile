import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
  formContainer: {
    flex: 2
  },
  forgot: {
    paddingTop: 12,
    fontFamily: "PoppinsRegular",
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0.25,
    color: colors.textPlaceholder,
    alignSelf: 'flex-end'
  }
});
