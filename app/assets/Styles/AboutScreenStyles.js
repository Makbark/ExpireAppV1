import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1f1f",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "95%",
    height: "70%",
    //marginTop: 100,
    shadowColor: "black",
    shadowOffset: { width: 2, height: -3 },
    shadowOpacity: 0.8,
    borderRadius: 25,
  },
  heading: {
    fontSize: 35,
    fontFamily: "poppins-bold",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.5,
    color: "white",
    marginTop: 20,
    marginBottom: 10,
  },
  pragraph: {
    fontFamily: "poppins",
    fontSize: 20,
    color: "white",
    marginTop: 15,
    marginLeft: 17,
  },
  backButton: {
    transform: [{ scaleX: -1 }], // Flips the image horizontally
    width: 50,
    height: 50,
    marginTop: 30,
  },
});

export default styles;
