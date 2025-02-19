import React, { useCallback } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect, CommonActions } from "@react-navigation/native";
import styles from "../assets/Styles/AboutScreenStyles";

const AboutScreen = ({ navigation }) => {
  const about =
    "Expire is a simple yet effective tool designed " +
    " to help you track your food expiration dates and reduce waste. " +
    "Just input your food items and their expiration dates, " +
    " and Expire will notify you before they go bad—helping " +
    "you save money and make the most of your groceries.";
  const aboutP2 =
    "This app is a personal project to gain experience in web" +
    "and mobile development with react, so you may encounter occasional bugs. If you do, please reach out so I can work on improvements and provide a better experience.";
  const aboutP3 =
    "Thank you for trying out Expire, and I hope it helps make food management a little easier!";
  const goToMainScreen = () => {
    // Reset the nested stack to its initial screen
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Profile" }], // Replace "NestedHome" with the initial screen of your nested stack
      })
    );

    // Navigate to a different screen in the parent stack
    //navigation.navigate("MainScreen"); // Replace "MainScreen" with the target screen in the parent stack
  };
  useFocusEffect(
    useCallback(() => {
      // This will run when the screen is focused
      console.log("Screen is focused");

      return () => {
        // This will run when the screen is unfocused
        console.log("Screen is unfocused");
        goToMainScreen();
      };
    }, [])
  );
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About Expire</Text>
      <LinearGradient
        colors={["#535353", "#1f1f1f"]}
        end={{ x: 1.5, y: 2 }}
        style={styles.box}
      >
        <Text style={styles.pragraph}>{about}</Text>
        <Text style={styles.pragraph}>{aboutP2}</Text>
        <Text style={styles.pragraph}>{aboutP3}</Text>
      </LinearGradient>
      <Pressable onPress={() => goToMainScreen()}>
        <Image
          source={require("../assets/icons/Chevron right.png")}
          style={styles.backButton}
        />
      </Pressable>
    </View>
  );
};

export default AboutScreen;
