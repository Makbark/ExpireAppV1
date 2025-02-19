import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth } from "firebase/auth";

const DataContext = createContext();

export function DataProvider({ children }) {
  const user = getAuth().currentUser;
  const uid = user ? user.uid : null;
  const [foodList, setFoodList] = useState([]); // Global list of Food objects
  const [email, setEmail] = useState("");
  const [canCopy, setCanCopy] = useState(false);

  const [totalNutrientFacts, setTotalNutrientFacts] = useState({
    Calories: 0,
    Protein: 0,
    Sodium: 0,
    Carbs: 0,
    Fat: 0,
  });
  const [currNutrientFacts, setCurrNutrientFacts] = useState({
    Calories: 0,
    Protein: 0,
    Sodium: 0,
    Carbs: 0,
    Fat: 0,
  });

  const [displayedFacts, setDisplayedFacts] = useState({
    Calories: 0,
    Protein: 0,
    Sodium: 0,
    Carbs: 0,
    Fat: 0,
  });

  const [isInitialized, setIsInitialized] = useState(false); // ✅ Track initialization

  // a "function" to save user data like the list of foods and nutrition facts
  const saveData = async () => {
    //initialize user data object
    const auth = getAuth();
    const user = auth.currentUser;
    const userData = {
      //username: ,
      email: user.email,
      food: foodList,
      nutrients: totalNutrientFacts,
    };

    try {
      // ✅ Use JSON.stringify to convert the object to a string
      await AsyncStorage.setItem(uid, JSON.stringify(userData));
      //console.log(userData.nutrients);
      console.log("Data saved successfully for UID:", uid);
    } catch (error) {
      console.log("Error saving data:", error);
    }
  };

  const loadData = async () => {
    try {
      // function to pass uid in as key to retrive the userData object
      const jsonValue = await AsyncStorage.getItem(uid);
      // create safe check to see if value exist at uid (key) if not
      // stored data contains empty food and nutrients dictionary
      const storedData =
        jsonValue != null ? JSON.parse(jsonValue) : { food: [], nutrients: {} };
      setFoodList(storedData.food); // ✅ Correctly set the food list
      setTotalNutrientFacts(storedData.nutrients); // set the nutrients
      setEmail(storedData.email);
      console.log("Retrieved food list:", storedData.food);
      console.log("Retrieved nutrients:", storedData.nutrients);
    } catch (error) {
      console.error("Error retrieving food list:", error);
    } finally {
      setIsInitialized(true); // ✅ Mark as initialized after loading
    }
  };

  // Function to add a new food item
  const addFood = (food) => {
    setFoodList((prevList) => {
      if (!Array.isArray(prevList)) {
        console.warn("prevList is not an array:", prevList);
        return [food]; // ✅ Reset if corrupted
      }
      return [...prevList, food];
    });
  };
  //saves data to AsyncStrorage when foodlist and/or when total nuterients is modified
  //only saves data when these verables are initialized which prevents from saving before
  //data is loaded resulting in the deletion of data
  useEffect(() => {
    if (isInitialized) {
      saveData();
    }
  }, [totalNutrientFacts, foodList]);

  //user data is fetched and loaded in
  //when navigator is initialized
  useEffect(() => {
    loadData();
  }, []);

  // runs when totalNutrientFacts changes
  useEffect(() => {
    //sets the nutriens progresstion values to the totalNutrientFacts values
    setDisplayedFacts(totalNutrientFacts);
  }, [totalNutrientFacts]);

  // runs when currNutrientFacts changes
  useEffect(() => {
    //canCopy used to prevent setting displayed facts to
    //all 0s because this also runs when this component is first mounted
    if (canCopy) {
      setDisplayedFacts(currNutrientFacts);
    } else {
      setCanCopy(true);
    }
  }, [currNutrientFacts]);

  const resetNutrients = () => {
    setDisplayedFacts(totalNutrientFacts);
  };

  const setNutrient = (nutrients) => {
    if (nutrients) {
      setTotalNutrientFacts((prevNutrients) => ({
        Calories:
          (nutrients["Energy (Atwater General Factors)"]?.value ?? 0) +
          (prevNutrients?.Calories || 0),
        Protein:
          (nutrients["Protein"]?.value || 0) + (prevNutrients?.Protein || 0),
        Fat:
          (nutrients["Total lipid (fat)"]?.value || 0) +
          (prevNutrients?.Fat || 0),
        Sodium:
          (nutrients["Sodium, Na"]?.value || 0) + (prevNutrients?.Sodium || 0),
        Carbs:
          (nutrients["Carbohydrate, by difference"]?.value || 0) +
          (prevNutrients?.Carbs || 0),
      }));
    }
  };

  const setCurrNutrient = (nutrients) => {
    if (nutrients) {
      setCurrNutrientFacts({
        Calories: nutrients["Energy (Atwater General Factors)"]?.value || 0,
        Protein: nutrients["Protein"]?.value || 0,
        Fat: nutrients["Total lipid (fat)"]?.value || 0,
        Sodium: nutrients["Sodium, Na"]?.value || 0,
        Carbs: nutrients["Carbohydrate, by difference"]?.value || 0,
      });
    }
  };

  return (
    <DataContext.Provider
      value={{
        foodList,
        addFood,
        setNutrient,
        totalNutrientFacts,
        setCurrNutrient,
        currNutrientFacts,
        displayedFacts,
        setDisplayedFacts,
        resetNutrients,
        email,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
