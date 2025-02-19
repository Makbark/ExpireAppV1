import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1f1f",
    alignItems: "center",
  },
  heading: {
    marginTop: 90,
    fontSize: 30,
    color: "white",
    fontFamily: "poppins-bold",
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
  },
  credContainer: {
    backgroundColor: "#393939",
    width: "80%",
    height: 70,
    marginTop: 45,
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.5,
  },
  labelText: {
    fontSize: 12,
    fontFamily: "poppins",
    color: "#b6b6b6",
    marginLeft: 15,
    marginTop: 5,
  },
  credText: {
    fontSize: 20,
    fontFamily: "poppins",
    color: "white",
    marginLeft: 15,
    marginTop: 5,
  },
  changePasswordButton: {
    width: 220,
    height: 50,
    backgroundColor: "#393939",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  changePasswordButtonText: {
    fontSize: 20,
    color: "#b6b6b6",
    fontFamily: "poppins-medium",
    color: "white",
  },
  backButton: {
    transform: [{ scaleX: -1 }], // Flips the image horizontally
    width: 50,
    height: 50,
    marginTop: 80,
  },
});

export default styles;
