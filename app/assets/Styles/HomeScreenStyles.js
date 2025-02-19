import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#1f1f1f",
  },

  topMidView: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  heading1: {
    shadowColor: "white",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    fontFamily: "poppins-smibold",
    fontSize: 40,
    marginTop: 10,
    marginLeft: 25,
    alignSelf: "baseline",
    color: "white",
  },
  addButton: {
    marginRight: 25,
  },
  addButtonImage: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
  },
  mainView: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    width: "90%",
    height: 450,
    marginLeft: 6,
    backgroundColor: "rgba(84, 163, 78, 1)",
    marginTop: 10,
    borderRadius: 45,
  },
  foodView: {
    marginTop: 1,
  },
  heading2: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    fontFamily: "poppins-smibold",
    fontSize: 20,
    alignSelf: "flex-start",
    marginTop: 15,
    marginLeft: 25,
    color: "white",
  },
  calorieTrackView: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    width: "90%",
    height: 165,
    marginTop: 15,
    borderRadius: 45,
    backgroundColor: "rgba(83, 83, 83, 1)",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  calorieProgressView: {
    //borderWidth: 2,
    marginHorizontal: 35,
  },
  otherProgressView: {
    //borderWidth: 2,
    alignItems: "center",
    marginBottom: 3,
  },
  calorieText: {
    color: "white",
    fontFamily: "poppins-medium",
    //position: "absolute",
    alignSelf: "center",
  },
  otherProgressText: {
    color: "white",
    fontFamily: "poppins-medium",
    //position: "absolute",
    alignSelf: "center",
  },
});

export default styles;
