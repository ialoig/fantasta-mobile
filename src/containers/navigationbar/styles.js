import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    //flex: 1,
    margin: 10,
    marginTop: 30,
    padding: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    //backgroundColor: "purple",
    alignItems: "center",
  },
  inkuboButton: {
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "lightgray",
    padding: 10,
  },
  beloxButton: {
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "lightgray",
    padding: 10,
  },
  imageButton: {
    //margin: 5,
    height: 50,
    width: 50,
    //padding: 10,
    //resizeMode: "stretch",
    //resizeMode: "contain",
    resizeMode: "cover",
  },
});
