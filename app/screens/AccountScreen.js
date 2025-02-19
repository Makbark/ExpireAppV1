import React, { useCallback, useState, useContext } from "react";
import { View, Text, TextInput, Pressable, Image } from "react-native";
import { useFocusEffect, CommonActions } from "@react-navigation/native";
import { handelPasswordReset } from "../components/AccountDataHandler";
import styles from "../assets/Styles/AccountScreenStyles";
import DataContext from "../components/DataContext";

const AccountScreen = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState("");
  const [currPassword, setCurrPassword] = useState("");
  const { email } = useContext(DataContext);
  const goToMainScreen = () => {
    // Reset the nested stack to its initial screen
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Profile" }], // Replace "NestedHome" with the initial screen of your nested stack
      })
    );
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
      <Text style={styles.heading}>Account</Text>
      <View style={styles.credContainer}>
        <Text style={styles.labelText}>Name</Text>
        <TextInput style={styles.credText}>Mark Norris</TextInput>
      </View>
      <View style={styles.credContainer}>
        <Text style={styles.labelText}>Email</Text>
        <Text style={styles.credText}>{email}</Text>
      </View>
      <View style={styles.credContainer}>
        <Text style={styles.labelText}>Current password</Text>
        <TextInput
          style={styles.credText}
          onChangeText={(text) => setCurrPassword(text)}
        ></TextInput>
      </View>
      <View style={styles.credContainer}>
        <Text style={styles.labelText}>New password</Text>
        <TextInput
          style={styles.credText}
          onChangeText={(text) => setNewPassword(text)}
        ></TextInput>
      </View>

      <Pressable
        style={styles.changePasswordButton}
        onPress={() => handelPasswordReset(currPassword, newPassword)}
      >
        <Text style={styles.changePasswordButtonText}>Change password</Text>
      </Pressable>

      <Pressable onPress={() => goToMainScreen()}>
        <Image
          source={require("../assets/icons/Chevron right.png")}
          style={styles.backButton}
        />
      </Pressable>
    </View>
  );
};

export default AccountScreen;
