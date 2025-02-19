import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loginModal: {},
  modalOverlay: {
    backgroundColor: "#2E2E2E",
    justifyContent: "flex-end",
    top: 230,
  },
  headingTextView: {
    paddingLeft: 30,
    backgroundColor: "#2E2E2E",
    height: "25%",
    width: "100%",
  },
  createAccountView: {
    backgroundColor: "#52a24d",
    height: "100%",
    borderRadius: 40,
  },

  headingText: {
    shadowColor: "black",
    shadowOffset: { width: 3, height: 7 },
    shadowOpacity: 0.8,
    top: 80,
    fontFamily: "poppins-smibold",
    fontSize: 40,
    color: "white",
  },
  exitIcon: {
    width: 50,
    height: 50,
  },
  exitButton: {
    top: 15,
    left: 10,
  },
  credentialsView: {
    marginTop: 65,
    alignItems: "center",

    //borderWidth: 3,
  },
  CredentialsContainer: {},
  userTextInput: {
    width: 350,
    height: 70,
    fontSize: 20,
    borderBottomWidth: 2,
    paddingTop: 35,
    bottom: 30,
    marginBottom: 15,
  },
  emailLabel: {
    fontFamily: "poppins-smibold",
    color: "white",
  },

  signUpButton: {
    shadowColor: "black",
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 0.5,
    width: "80%",
    height: 70,
    borderWidth: 2,
    borderColor: "#2E2E2E",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 45,
    top: 30,
    backgroundColor: "white",
  },
  signUpButtonText: {
    fontFamily: "poppins-smibold",
    fontSize: 30,
    color: "#2E2E2E",
  },
  signUpTextContainer: {
    marginTop: 100,
    flexDirection: "row",
    justifyContent: "center",
  },
  signInText1: {
    marginRight: 7,
    fontFamily: "poppins",
    color: "#3c3c3c",
  },
  signInText2: {
    fontFamily: "poppins",
    color: "white",
  },
});

export default styles;
