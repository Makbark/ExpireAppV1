import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#2E2E2E",
  },
  logo: {
    width: 300,
    height: 300,
    top: 20,
  },
  titleText: {
    color: "white",
    shadowColor: "black",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.8,
    fontFamily: "poppins-bolditalic",
    fontSize: 99,
    marginTop: 0,
    marginBottom: 200,
  },

  createAccButton: {
    borderWidth: 5,
    borderColor: "white",
    borderRadius: 45,
    width: "90%",
    height: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  createAccText: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    color: "white",
    fontFamily: "poppins-smibold",
    fontSize: 31,
  },
  loginButton: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    borderRadius: 45,
    width: "90%",
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#52a24d",
    marginBottom: 20,
  },
  loginGradient: {
    borderRadius: 45,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    color: "white",
    fontFamily: "poppins-smibold",
    fontSize: 31,
  },
});

export default styles;
