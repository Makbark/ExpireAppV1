import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  profileContainer: {
    width: "100%",
    height: "60%",
    backgroundColor: "#1f1f1f",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: "center",
  },
  profileImageContainer: {
    width: 175,
    height: 175,
    backgroundColor: "grey",
    alignSelf: "center",
    borderRadius: 100,
    position: "absolute",
    top: 250,
  },
  buttons: {
    width: "75%",
    height: 70,
    backgroundColor: "#393939",
    marginTop: 50,
    borderRadius: 35,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
  },
  buttonIcon: {
    width: 40,
    height: 40,
    marginLeft: 20,
  },
  buttonText: {
    fontSize: 25,
    fontFamily: "poppins-medium",
    left: 10,
    color: "#949191",
  },
});

export default styles;
