import React from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { signOut, getAuth } from "firebase/auth";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../assets/Styles/ProfileScreenStyles";

const ProfileScreen = ({ navigation }) => {
  const auth = getAuth();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log("Logged out successfully");
    } catch (error) {
      console.log("Logout error:", error.message);
    }
  };

  return (
    <LinearGradient
      colors={["#56a34d", "#a2bf4c", "#f8de4b"]}
      end={{ x: 0.5, y: 1 }}
      style={styles.background}
    >
      <View style={styles.profileContainer}>
        <View style={{ marginTop: 100 }}></View>
        <Pressable
          style={styles.buttons}
          onPress={() => navigation.navigate("About")}
        >
          <View
            style={{
              height: "100%",
              //borderWidth: 2,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/icons/Info.png")}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}> about</Text>
            <Image
              source={require("../assets/icons/Chevron right.png")}
              style={{ height: 40, width: 40, marginLeft: 125 }}
            />
          </View>
        </Pressable>
        <Pressable
          style={styles.buttons}
          onPress={() => navigation.navigate("Account")}
        >
          <View
            style={{
              height: "100%",
              //borderWidth: 2,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/icons/User.png")}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}> account</Text>
            <Image
              source={require("../assets/icons/Chevron right.png")}
              style={{ height: 40, width: 40, marginLeft: 100 }}
            />
          </View>
        </Pressable>
        <Pressable style={styles.buttons} onPress={handleLogout}>
          <View
            style={{
              height: "100%",
              //borderWidth: 2,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/icons/Log out.png")}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}> logout</Text>
            <Image
              source={require("../assets/icons/Chevron right.png")}
              style={{ height: 40, width: 30, marginLeft: 125 }}
            />
          </View>
        </Pressable>
      </View>
      <View style={styles.profileImageContainer}></View>
    </LinearGradient>
  );
};

export default ProfileScreen;
