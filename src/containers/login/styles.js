import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    textAlign: "center",
    
    marginTop: 70,
    padding: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20
  },
  textUsername: {
    textAlign: "center",
    color: "green",
    fontSize: 20
  },
  textPassword: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 20
  },
  button: {
    width: 327,
    height: 64,
    borderRadius: 40,
    backgroundColor: "FFFFFF"
  }
});
