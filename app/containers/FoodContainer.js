import { React, use, useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import PropTypes from "prop-types";
import { useFonts } from "expo-font";
import * as Progress from "react-native-progress";
import DataContext from "../Context/DataContext";

/* Todo: Create a auto date converter from xx/xx/xxxx layout to 
"April 4th, 2003" <- example of date layout*/

const FoodContainer = ({
  food,
  foodTitle,
  month,
  day,
  quantity,
  nutrients,
  date,
}) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useFonts({
    "poppins-medium": require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
    "poppins-bolditalic": require("../assets/fonts/Poppins/Poppins-BoldItalic.ttf"),
    "poppins-smibold": require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
  });

  const [expDateViewExpanded, setexpDateViewExpanded] = useState(false);
  //TODO: need to make a variable in food class to hold the total amount of days from
  //reminder created to experation date and creat a day counters to update progress circle

  const now = new Date(); // Current date
  const expirationDate = new Date(date); // Expiration/reminder date

  const differenceInMilliseconds = expirationDate - now; // Difference in milliseconds
  const daysApart = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24)); // Convert to days
  const [progress, setProgress] = useState(1 / (daysApart / 3));
  const { setCurrNutrient, resetNutrients } = useContext(DataContext);

  const updateNutrient = (nutrients) => {
    setCurrNutrient(nutrients); // Add the nutrients using the provided function
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.currFoodContainer,
        pressed && styles.currFoodContainerPressed, // Apply additional styles when pressed
      ]}
      onLongPress={() => updateNutrient(nutrients)}
      onPressOut={resetNutrients}
    >
      <View style={styles.foodTitleContainer}>
        <Text style={styles.foodTitle}>{foodTitle}</Text>
        <Text style={styles.quantityLabel}>{quantity}x</Text>
      </View>
      <Pressable
        style={styles.dateView}
        onPress={() => setexpDateViewExpanded(!expDateViewExpanded)}
      >
        <Progress.Circle
          //make so as date gets closer exp date color changes
          style={styles.expProgress}
          size={45}
          indeterminate={false}
          progress={progress}
          unfilledColor="#56a34d"
          color="#f8de4b"
          borderWidth={0}
          thickness={8}
        />
      </Pressable>
      {expDateViewExpanded && (
        <Pressable
          style={styles.dateViewPressed}
          onPress={() => setexpDateViewExpanded(!expDateViewExpanded)}
        >
          <View style={styles.dateContainer}>
            <Text style={styles.month}>{monthNames[month]}</Text>
            <Text style={styles.day}>{day}</Text>
          </View>
          <Progress.Circle
            //make so as date gets closer exp date color changes
            style={styles.expProgressPressed}
            size={45}
            thickness={8}
            indeterminate={false}
            borderWidth={0}
            progress={progress}
            unfilledColor="#56a34d"
            color="#f8de4b"
          />
        </Pressable>
      )}
    </Pressable>
  );
};

export default FoodContainer;

const styles = StyleSheet.create({
  currFoodContainer: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    marginLeft: 10,
    marginTop: 5,
    backgroundColor: "rgba(229, 229, 229, 1)",
    borderRadius: 35,
    width: "95%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  currFoodContainerPressed: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  foodTitleContainer: {
    marginLeft: 25,
  },
  foodTitle: {
    fontFamily: "poppins-semiBold",
    fontSize: 20,
  },
  quantityLabel: {
    fontFamily: "poppins",
    fontSize: 12,
  },
  dateView: {
    flexDirection: "row",
    marginRight: 20,
    backgroundColor: "rgba(61, 61, 61, 1)",
    width: 60,
    height: 60,
    borderRadius: 30,
    //borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  dateViewPressed: {
    flexDirection: "row",
    right: 20,
    backgroundColor: "rgba(61, 61, 61, 1)",
    width: 100,
    height: 60,
    borderRadius: 30,
    //borderWidth: 2,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
  },
  dateContainer: {
    //borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    left: 15,
  },
  expProgress: {},
  expProgressPressed: {
    right: 7.5,
  },
  flexDirection: "row",
  marginRight: 20,
  backgroundColor: "rgba(61, 61, 61, 1)",
  width: 60,
  height: 60,
  borderRadius: 30,
  //borderWidth: 2,
  justifyContent: "center",
  alignItems: "center",
  month: {
    fontFamily: "poppins-smibold",
    color: "white",
  },
  day: {
    fontFamily: "poppins-smibold",
    color: "white",
    //position: "absolute",
    fontSize: 12,
  },
  removeButton: {
    alignSelf: "flex-end",
    marginRight: 15,
  },
  removeBunttonView: {
    flex: 1,
    //borderWidth: 2,
  },
});

/*
holding cell

<View style={styles.removeBunttonView}>
        <TouchableHighlight
          style={styles.removeButton}
          activeOpacity={0.4}
          underlayColor="#DDDDD"
          onPress={onRemove}
        >
          <Image source={require("../assets/icons/Remove.png")} />
        </TouchableHighlight>
      </View>

  <Text style={styles.date}>Expires:</Text>
        <Text style={styles.day}>xx/xx/xx</Text>
*/
