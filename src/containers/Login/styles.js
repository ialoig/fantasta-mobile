import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
  formContainer: {
    flex: 2
  },
  forgot: {
    alignSelf: "flex-end",
    paddingTop: 12,
    color: colors.textPlaceholder,
  },
  haveAccount: {
    alignSelf: "center",
    paddingTop: 12,
    color: colors.textPlaceholder,
  }
});
