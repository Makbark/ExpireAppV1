import { useState, useContext, useEffect } from "react";
import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  Modal,
  TouchableOpacity,
} from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import DataContext from "../components/DataContext";
import Food from "./Food.js";
import { fetchSRLegacyNutrients } from "../components/FoodFetcher.js";
import CreateRStyles from "../assets/Styles/CreateRStyles";

const CreateReminderScreen = ({ onClose, onCreate }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const [isValid, setValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const { addFood, setNutrient } = useContext(DataContext);

  const [name, setName] = useState("");
  const [expirationDate, setExpirationDate] = useState(new Date());
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [formattedDate, setFormattedDate] = useState("");

  const [nutrients, setNutrients] = useState({});
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [sodium, setSodium] = useState(0);
  const [carbs, setCarbs] = useState(0);

  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState();

  useEffect(() => {
    fetch(
      "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=1&api_key=ymuCc4xqKpNsZrt2IiQHwFUbYQyipv05qD53QsX3"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          setResponse(result);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, []);

  useFonts({
    "poppins-medium": require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
    "poppins-bolditalic": require("../assets/fonts/Poppins/Poppins-BoldItalic.ttf"),
    "poppins-smibold": require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "poppins-bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
  });

  const toggleModal = (type) => {
    setModalVisible(!isModalVisible);
  };

  const onDateChange = ({}, selectedDate) => {
    setExpirationDate(selectedDate);
    setFormattedDate(selectedDate.toDateString());
    setMonth(selectedDate.getMonth());
    setDay(selectedDate.getDate());
  };

  const onNameChange = async (food) => {
    setName(food);
  };

  const getNutrients = async (food) => {
    try {
      const fetchedNutrients = await fetchSRLegacyNutrients(food);
      if (fetchSRLegacyNutrients) {
        setNutrients(fetchedNutrients); // Update the state
      }
    } catch (error) {
      console.error("Error fetching nutrients:", error);
    }
  };

  useEffect(() => {
    if (name.length <= 0) {
      setCalories(0);
      setProtein(0);
      setFat(0);
      setSodium(0);
      setCarbs(0);
    } else {
      getNutrients(name);
    }
  }, [name]);

  useEffect(() => {
    if (nutrients && name.length > 0) {
      setCalories(nutrients["Energy (Atwater General Factors)"]?.value);
      setProtein(nutrients["Protein"]?.value);
      setFat(nutrients["Total lipid (fat)"]?.value);
      setSodium(nutrients["Sodium, Na"]?.value);
      setCarbs(nutrients["Carbohydrate, by difference"]?.value);
    } else {
      setCalories(0);
      setProtein(0);
      setFat(0);
      setSodium(0);
      setCarbs(0);
    }
  }, [nutrients]); // Run whenever `nutrients` changes

  const onExitModal = () => {
    setExpirationDate(new Date());
    setFormattedDate(" ");
    toggleModal();
  };

  const handleAddFood = () => {
    const newFood = new Food(
      name,
      month,
      day,
      quantity,
      nutrients,
      expirationDate,
      setNutrient
    ); // Create a new Food object
    addFood(newFood); // Add the new Food object to the global list

    setName(""); // Clear input fieldss
    setExpirationDate(new Date());
    setFormattedDate("");
    setQuantity(1);
    setCalories(0);
    setProtein(0);
    setFat(0);
    setSodium(0);
    setCarbs(0);
  };

  const checkValid = () => {
    if (formattedDate == "") {
      setValid(false);
      setErrorMessage("Experation date not specified");
      return;
    }
    if (name == "") {
      setValid(false);
      setErrorMessage("Name not specified");
      return;
    }
    setValid(true);
    handleAddFood();
  };

  //create typing animation for foodTypr text input
  return (
    <View style={CreateRStyles.backgroundModal}>
      <LinearGradient
        style={CreateRStyles.modalOverlay}
        colors={["#56a34d", "#a2bf4c", "#f8de4b"]}
        end={{ x: 0.5, y: 0.35 }}
      >
        <View style={CreateRStyles.headingView}>
          <Text style={CreateRStyles.heading1}>Create </Text>
          <Text style={CreateRStyles.heading1}>your reminder </Text>
        </View>
        <View style={CreateRStyles.createReminderContainer}>
          <TextInput
            placeholder="Food"
            style={CreateRStyles.foodType}
            textAlign="center"
            autoCorrect={true}
            value={name}
            onChangeText={onNameChange}
            placeholderTextColor={"grey"}
          />

          <View style={CreateRStyles.textInputView}>
            <View style={CreateRStyles.credContainer}>
              <View style={CreateRStyles.dateView}>
                <Text style={CreateRStyles.createDatesText}>
                  Experation date
                </Text>
                <TextInput
                  style={CreateRStyles.datesTextInput}
                  value={formattedDate}
                  fontFamily={"poppins"}
                  editable={false}
                  onPress={() => toggleModal("exp")}
                />
              </View>
              <View style={CreateRStyles.dateView}>
                <Text style={CreateRStyles.qunatityText}>Quantity</Text>
                <View style={CreateRStyles.qunatView}>
                  <Pressable
                    onPress={() =>
                      quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1)
                    }
                  >
                    <Image
                      style={CreateRStyles.incDecIcons}
                      source={require("../assets/icons/Arrow left-circle.png")}
                    />
                  </Pressable>
                  <Text style={CreateRStyles.numText}>{quantity}</Text>
                  <Pressable
                    onPress={() =>
                      quantity >= 99
                        ? setQuantity(99)
                        : setQuantity(quantity + 1)
                    }
                  >
                    <Image
                      style={CreateRStyles.incDecIcons}
                      source={require("../assets/icons/Arrow right-circle.png")}
                    />
                  </Pressable>
                </View>
              </View>
            </View>

            {!isValid && (
              <Text style={CreateRStyles.errorMessage}>{errorMessage}</Text>
            )}

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <LinearGradient
                style={CreateRStyles.nutritionView}
                colors={["#535353", "#1f1f1f"]}
                end={{ x: 1.5, y: 2 }}
              >
                <View style={CreateRStyles.calorieTextContainer}>
                  <Text style={CreateRStyles.calorieText}>Calories</Text>
                </View>
                <View style={CreateRStyles.calorieContainer}>
                  <Text style={CreateRStyles.calorieCount}>{calories}</Text>
                </View>
              </LinearGradient>
              <LinearGradient
                style={CreateRStyles.nutritionView}
                colors={["#535353", "#1f1f1f"]}
                end={{ x: 1.5, y: 2 }}
              >
                <View style={CreateRStyles.calorieTextContainer}>
                  <Text style={CreateRStyles.calorieText}>Protein</Text>
                  <View style={CreateRStyles.calorieCountContainer}></View>
                </View>
                <View style={CreateRStyles.calorieContainer}>
                  <Text style={CreateRStyles.calorieCount}>{protein}g</Text>
                </View>
              </LinearGradient>
            </View>

            <View style={CreateRStyles.middleContainer}>
              <LinearGradient
                style={CreateRStyles.nutritionView2}
                colors={["#535353", "#1f1f1f"]}
                end={{ x: 1.5, y: 2 }}
              >
                <View style={CreateRStyles.otherFactsTextContainer}>
                  <Text style={CreateRStyles.otherFactText}>Fat</Text>
                </View>

                <View style={CreateRStyles.otherFactsValueContainer}>
                  <Text style={CreateRStyles.otherFactsValue}>{fat}g</Text>
                </View>
              </LinearGradient>
              <LinearGradient
                style={CreateRStyles.nutritionView2}
                colors={["#535353", "#1f1f1f"]}
                end={{ x: 1.5, y: 2 }}
              >
                <View style={CreateRStyles.otherFactsTextContainer}>
                  <Text style={CreateRStyles.otherFactText}>Sodium</Text>
                </View>

                <View style={CreateRStyles.otherFactsValueContainer}>
                  <Text style={CreateRStyles.otherFactsValue}>{sodium}mg</Text>
                </View>
              </LinearGradient>
              <LinearGradient
                style={CreateRStyles.nutritionView2}
                colors={["#535353", "#1f1f1f"]}
                end={{ x: 1.5, y: 2 }}
              >
                <View style={CreateRStyles.otherFactsTextContainer}>
                  <Text style={CreateRStyles.otherFactText}>Carbs</Text>
                </View>

                <View style={CreateRStyles.otherFactsValueContainer}>
                  <Text style={CreateRStyles.otherFactsValue}>{carbs}g</Text>
                </View>
              </LinearGradient>
            </View>

            <Pressable style={CreateRStyles.createButton} onPress={checkValid}>
              <LinearGradient
                style={CreateRStyles.createButtonGradient}
                colors={["#56a34d", "#a2bf4c", "#f8de4b"]}
                end={{ x: 1.5, y: 1.5 }}
              >
                <Text style={CreateRStyles.createButtonText}>Create</Text>
              </LinearGradient>
            </Pressable>

            <Modal
              animationType="slide"
              transparent={true}
              visible={isModalVisible}
              onRequestClose={toggleModal}
            >
              <LinearGradient
                style={CreateRStyles.modalContainer}
                colors={["#535353", "#1f1f1f"]}
                end={{ x: 1.5, y: 2 }}
              >
                <View style={CreateRStyles.modalContent}>
                  <RNDateTimePicker
                    value={expirationDate}
                    display={"spinner"}
                    onChange={onDateChange}
                    textColor="white"
                    style={CreateRStyles.dateTimePicker}
                  />
                  <View style={CreateRStyles.confirmDateView}>
                    <TouchableOpacity
                      style={CreateRStyles.dateExitButton}
                      onPress={onExitModal}
                    >
                      <Text style={CreateRStyles.exitText}>Exit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={CreateRStyles.confirmDateButton}
                      onPress={toggleModal}
                    >
                      <LinearGradient
                        style={CreateRStyles.confirmButtonGradient}
                        colors={["#56a34d", "#a2bf4c", "#f8de4b"]}
                        end={{ x: 1.5, y: 1.5 }}
                      >
                        <Text style={CreateRStyles.confirmText}>Confirm</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </View>
              </LinearGradient>
            </Modal>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default CreateReminderScreen;
