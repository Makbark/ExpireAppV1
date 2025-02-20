import React, { useState, useEffect, useContext } from "react";
import HomeScreen from "./app/screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import RegLoginScreen from "./app/screens/RegLoginScreen";

import { TabBar } from "./app/navigation/TabBar";
import CreateReminderScreen from "./app/screens/CreateReminderScreen";

import { DataProvider } from "./app/Context/DataContext";
import { onAuthStateChanged } from "firebase/auth";
import ProfileNavigator from "./app/navigation/ProfileNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "./app/services/firebaseConfig.js"; // Ensure this is the correct path
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";

const Tab = createBottomTabNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Check if user is already logged in on app start
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const storedUser = await AsyncStorage.getItem(); // Retrieve user data
        console.log(storedUser);
        if (storedUser) {
          setUser(JSON.parse(storedUser)); // ✅ Parse and set user
        }
      } catch (error) {
        console.error("Failed to load auth status", error);
      }
      setLoading(false);
    };

    checkAuthStatus();
  }, []);

  // ✅ Listen for Firebase Auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        await AsyncStorage.setItem("uid", JSON.stringify(currentUser.uid)); // ✅ Save user session
      } else {
        await AsyncStorage.removeItem("uid"); // ✅ Clear session if logged out
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return null; // ✅ Display loading spinner if needed
  }

  if (!user) {
    return <RegLoginScreen />;
  }

  return (
    <DataProvider>
      <NavigationContainer>
        <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
          <Tab.Screen
            name="Profile"
            component={ProfileNavigator}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Create"
            component={CreateReminderScreen}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}
