import React, { useState, useEffect, useContext } from "react";
import FoodContainer from "../containers/FoodContainer";
import { View, SafeAreaView, ScrollView, Text } from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import DataContext from "../Context/DataContext";
import * as Progress from "react-native-progress";
import styles from "../assets/Styles/HomeScreenStyles.js";

const HomeScreen = ({ navigation }) => {
  useFonts({
    "poppins-medium": require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
    "poppins-bolditalic": require("../assets/fonts/Poppins/Poppins-BoldItalic.ttf"),
    "poppins-smibold": require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
  });

  //used for checking if create reminder screen is visible
  const [isCreateVisible, setisCreateVisible] = useState();
  //array that holds the reminders created (food containers)
  const [items, setItems] = useState([]);
  //holds the input for searchbar
  const [searchQuery, setSearchQuery] = useState("");
  const { foodList, displayedFacts, totalNutrientFacts } =
    useContext(DataContext);

  const [currItem, setCurrItem] = useState();

  const [caloriesProg, setCaloriesProg] = useState(1);
  const [proteinProg, setProtienProg] = useState(1);
  const [sodiumProg, setSodiumProg] = useState(1);
  const [fatProg, setFatProg] = useState(1);
  const [carbsProg, setCarbsProg] = useState(1);

  //add reminder to items, called when you press create button

  //removes reminder from items list
  const removeFood = (id) => {
    console.log("remove");
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  //updates the search query
  const handleSearchQuery = (query) => {
    setSearchQuery(query);
  };

  /* Filter items based on search query
  const filteredItems = items.filter((item) =>
    get the instance of food container from items and gets the 
    lowercase of food title and compares it to the lowercase of 
    the search query
    item.foodTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );*/

  useEffect(() => {
    if (displayedFacts) {
      setCaloriesProg(
        displayedFacts["Calories"] / totalNutrientFacts["Calories"] || 0
      );
      setProtienProg(
        displayedFacts["Protein"] / totalNutrientFacts["Protein"] || 0
      );
      setSodiumProg(
        displayedFacts["Sodium"] / totalNutrientFacts["Sodium"] || 0
      );
      setFatProg(displayedFacts["Fat"] / totalNutrientFacts["Fat"] || 0);
      setCarbsProg(displayedFacts["Carbs"] / totalNutrientFacts["Carbs"] || 0);
    }
  }, [displayedFacts]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topMidView}>
        <Text style={styles.heading1}>Alerts</Text>
      </View>

      <LinearGradient
        style={styles.mainView}
        colors={["#56a34d", "#a2bf4c", "#f8de4b"]}
        end={{ x: 1.5, y: 2 }}
      >
        <ScrollView
          style={styles.foodView}
          showsVerticalScrollIndicator={false}
        >
          {Array.isArray(foodList) ? (
            foodList.map((food, index) => (
              <FoodContainer
                key={index}
                food={food}
                foodTitle={food.name}
                month={food.month}
                day={food.day}
                quantity={food.quantity}
                date={food.date}
                nutrients={food.nutrients}
              />
            ))
          ) : (
            <Text> add items</Text>
          )}
        </ScrollView>
      </LinearGradient>
      <Text style={styles.heading2}>Total Nutrition</Text>

      <LinearGradient
        style={styles.calorieTrackView}
        colors={["#535353", "#1f1f1f"]}
        end={{ x: 1.5, y: 2 }}
      >
        <View style={styles.otherProgressView}>
          <View
            style={{
              position: "absolute",
              alignSelf: "center",
              marginTop: 23,
            }}
          >
            <Text style={styles.otherProgressText}>Protien</Text>
            <Text style={styles.otherProgressText}>
              {Math.round(displayedFacts?.["Protein"] ?? 0)}
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              alignSelf: "center",
              marginTop: 103,
            }}
          >
            <Text style={styles.otherProgressText}>Sodium</Text>
            <Text style={styles.otherProgressText}>
              {Math.round(displayedFacts?.["Sodium"] ?? 0)}g
            </Text>
          </View>
          <Progress.Circle
            //make so as date gets closer exp date color changes
            style={{ marginVertical: 7 }}
            size={70}
            indeterminate={false}
            progress={proteinProg}
            color="#6eaa46"
            unfilledColor="rgba(99, 99, 99, 0.8)"
            borderWidth={0}
            thickness={4}
          />
          <Progress.Circle
            //make so as date gets closer exp date color changes

            size={70}
            indeterminate={false}
            progress={sodiumProg}
            color="#6eaa46"
            unfilledColor="rgba(99, 99, 99, 0.8)"
            borderWidth={0}
            thickness={4}
          />
        </View>
        <View style={styles.calorieProgressView}>
          <View
            style={{
              position: "absolute",
              alignSelf: "center",
              marginTop: 40,
            }}
          >
            <Text style={styles.calorieText}>Calories</Text>
            <Text style={styles.calorieText}>
              {Math.round(displayedFacts?.["Calories"] ?? 0)}
            </Text>
          </View>
          <Progress.Circle
            //make so as date gets closer exp date color changes
            style={styles.calorieProgressCircle}
            size={120}
            indeterminate={false}
            progress={caloriesProg}
            color="#6eaa46"
            unfilledColor="rgba(99, 99, 99, 0.8)"
            borderWidth={0}
            thickness={8}
          />
        </View>
        <View style={styles.otherProgressView}>
          <View
            style={{
              position: "absolute",
              alignSelf: "center",
              marginTop: 23,
            }}
          >
            <Text style={styles.otherProgressText}>Fat</Text>
            <Text style={styles.otherProgressText}>
              {Math.round(displayedFacts?.["Fat"] ?? 0)}g
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              alignSelf: "center",
              marginTop: 95,
            }}
          >
            <Text style={styles.otherProgressText}>Carbs</Text>
            <Text style={styles.otherProgressText}>
              {Math.round(displayedFacts?.["Carbs"] ?? 0)}g
            </Text>
          </View>
          <Progress.Circle
            //make so as date gets closer exp date color changes
            style={{ marginVertical: 7 }}
            size={70}
            indeterminate={false}
            progress={fatProg}
            color="#6eaa46"
            unfilledColor="rgba(99, 99, 99, 0.8)"
            borderWidth={0}
            thickness={4}
          />
          <Progress.Circle
            //make so as date gets closer exp date color changes

            size={70}
            indeterminate={false}
            progress={carbsProg}
            color="#6eaa46"
            unfilledColor="rgba(99, 99, 99, 0.8)"
            borderWidth={0}
            thickness={4}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreen;
