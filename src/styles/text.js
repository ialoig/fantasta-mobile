import { StyleSheet } from "react-native";

import colors from "./colors"

export default StyleSheet.create({
  h1: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 25,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 30,
    letterSpacing: 0.75,
    color: colors.text
  },
  h2: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 22,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 30,
    letterSpacing: 0.75,
    color: colors.text
  },
  title: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: 0.75,
    color: colors.text
  },
  body: {
    fontFamily: "PoppinsRegular",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: 0.75,
    color: colors.text
  },
  button: {
    fontFamily: "PoppinsRegular",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: 0.75,
    color: colors.text
  },
  h3: {
    fontFamily: "PoppinsMedium",
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0.25,
    marginTop: 4,
    color: colors.text
  },
  buttonXSmall: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 13,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0.75,
    color: colors.text
  },
  description: {
    fontFamily: "PoppinsRegular",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 15,
    letterSpacing: 0.75,
    marginTop: 4,
    color: colors.textPlaceholder
  },
  graphTitle: {
    fontFamily: "PoppinsMedium",
    fontSize: 10,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.text
  },
  p1: {
    fontFamily: "PoppinsLight",
    fontSize: 10,
    fontWeight: "300",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.text
  }
});