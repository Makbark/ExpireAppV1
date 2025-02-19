import { React, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
  SafeAreaView,
} from "react-native";
import LoginScreen from "./LoginScreen";
import CreateAccountScreen from "./CreateAccountScreen";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../assets/Styles/RegLoginScreenStyles";

import { useFonts } from "expo-font";

const RegLoginScreen = () => {
  const [isLoginModalVisible, setLoginModalVisible] = useState(false);
  const [isRegModalVisible, setRegModalVisible] = useState(false);

  const swtichModal = () => {
    setLoginModalVisible(!isLoginModalVisible);
    setRegModalVisible(!isRegModalVisible);
  };

  useFonts({
    "poppins-medium": require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
    "poppins-bolditalic": require("../assets/fonts/Poppins/Poppins-BoldItalic.ttf"),
    "poppins-smibold": require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
  });

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/icons/logo1.png")}
        style={styles.logo}
      />

      <Text style={styles.titleText}>Expire</Text>

      <TouchableHighlight
        style={styles.createAccButton}
        onPress={() => setRegModalVisible(!isRegModalVisible)}
      >
        <Text style={styles.createAccText}>Create account</Text>
      </TouchableHighlight>
      <Pressable
        style={styles.loginButton}
        onPress={() => setLoginModalVisible(!isLoginModalVisible)}
      >
        <LinearGradient
          colors={["#56a34d", "#a2bf4c", "#f8de4b"]}
          end={{ x: 1.5, y: 2 }}
          style={styles.loginGradient}
        >
          <Text style={styles.loginText}>Login</Text>
        </LinearGradient>
      </Pressable>
      {isLoginModalVisible && (
        <LoginScreen
          onClose={() => setLoginModalVisible(!isLoginModalVisible)}
          onSwitch={() => swtichModal()}
        />
      )}
      {isRegModalVisible && (
        <CreateAccountScreen
          onClose={() => setRegModalVisible(!isRegModalVisible)}
          onSwitch={() => swtichModal()}
        />
      )}
    </SafeAreaView>
  );
};

export default RegLoginScreen;
