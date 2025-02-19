import { StyleSheet } from "react-native";

const CreateRStyles = StyleSheet.create({
  backgroundModal: {},
  modalOverlay: {
    backgroundColor: "rgba(84, 163, 78, 1)",
  },
  headingView: {
    width: "100%",
    height: 50,
  },
  heading1: {
    fontFamily: "poppins-smibold",
    fontSize: 40,
    top: 100,
    left: 50,
    color: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
  },

  createReminderContainer: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    backgroundColor: "#1f1f1f",
    width: "100%",
    height: "100%",
    //position: "absolute",
    //alignSelf: "center",
    //alignItems: "center",
    //justifyContent: "center",
    //left: "10%",
    borderRadius: 45,
    //flex: 1,

    top: 200,
  },

  foodType: {
    fontFamily: "poppins",
    fontSize: 25,
    width: 200,
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 40,
    color: "white",
  },
  credContainer: {
    // borderWidth: 2,
    width: "90%",
    height: 90,
    alignSelf: "center",
    //alignItems: "center",
    marginBottom: 20,
  },
  dateView: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 15,
    marginBottom: 15,
    //borderWidth: 2,
  },
  createDatesText: {
    fontFamily: "poppins-medium",
    fontSize: 20,
    color: "white",
  },
  datesTextInput: {
    width: 140,
    height: 25,
    borderBottomWidth: 2,
    borderColor: "white",
    marginLeft: 15,
    paddingTop: 0,
    color: "white",
  },
  qunatityText: {
    fontFamily: "poppins-medium",
    fontSize: 20,
    marginRight: 20,
    color: "white",
  },
  qunatView: {
    flexDirection: "row",
    justifyContent: "space-between",
    //borderWidth: 2,
    width: 100,
  },
  incDecIcons: {
    width: 30,
    height: 30,
    top: 5,
  },
  numText: {
    fontFamily: "poppins",
    top: 5,
    color: "white",
    fontSize: 20,
  },

  errorMessage: {
    alignSelf: "center",
    color: "red",
    position: "absolute",
    top: -75,
  },
  createButton: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    width: "90%",
    height: 65,
    alignSelf: "center",
    marginTop: 40,
    borderRadius: 45,
    marginTop: 30,
  },
  createButtonGradient: {
    width: "100%",
    height: 65,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
  },

  createButtonText: {
    fontFamily: "poppins-smibold",
    fontSize: 30,
    color: "white",
  },

  //Nutrition
  nutritionView: {
    width: 160,
    height: 90,
    borderRadius: 25,
    alignSelf: "flex-start",
    marginTop: 35,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  titleText: {
    fontFamily: "poppins-bold",
    fontSize: 30,
  },

  calorieTextContainer: {
    backgroundColor: "rgba(147, 147, 147, .4)",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    width: "90%",
    height: 35,
    borderRadius: 20,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  calorieText: {
    fontFamily: "poppins-smibold",
    fontSize: 25,
    color: "white",
  },
  calorieCount: {
    color: "white",
    fontFamily: "poppins-smibold",
    fontSize: 27,
  },

  calorieContainer: {
    //borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  middleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 15,
  },
  nutritionView2: {
    width: 120,
    height: 75,
    borderRadius: 25,
    margin: 10,
    flexDirection: "col",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  otherFactsTextContainer: {
    backgroundColor: "rgba(147, 147, 147, .4)",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    width: 90,
    height: 30,
    borderRadius: 20,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  otherFactText: {
    fontFamily: "poppins-smibold",
    fontSize: 20,
    color: "white",
  },
  otherFactsValueContainer: {
    marginBottom: 0,
    marginLeft: 0,
    marginTop: -5,
  },

  otherFactsValue: {
    color: "white",
    fontFamily: "poppins-smibold",
    fontSize: 25,
    marginVertical: 4,
  },

  otherFactsContainer: {
    backgroundColor: "grey",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    width: "90%",
    height: 30,
    borderRadius: 15,
    marginTop: 5,
    alignSelf: "center",
  },

  //end Nutrition

  modalContainer: {
    //borderWidth: 2,

    height: "100%",
    width: "100%",
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    top: 600,
    borderRadius: 25,
    backgroundColor: "white",
  },
  dateTimePicker: {
    marginTop: 15,
    //borderWidth: 2,
    //backgroundColor: "#55a34b",
    borderRadius: 45,
  },
  confirmDateView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateExitButton: {
    alignSelf: "center",
    top: 25,
    borderWidth: 2,
    width: 100,
    height: 50,
    borderRadius: 25,
    borderColor: "#55a34b",
    justifyContent: "center",
    alignItems: "center",
    left: 25,
  },
  exitText: {
    color: "#55a34b",
    fontFamily: "poppins",
  },
  confirmDateButton: {
    alignSelf: "center",
    top: 25,
    borderWidth: 2,
    width: 100,
    height: 50,
    borderRadius: 25,
    borderColor: "#55a34b",
    justifyContent: "center",
    alignItems: "center",
    right: 25,
  },
  confirmButtonGradient: {
    width: 100,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  confirmText: {
    color: "white",
    fontFamily: "poppins",
  },
});

export default CreateRStyles;
