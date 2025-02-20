import React, { useEffect, useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { login } from "../services/AccountDataHandler";
import styles from "../assets/Styles/LoginScreenStyles";

const LoginScreen = ({ onClose, onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validCred, setValidCred] = useState(false);

  const handleLogin = () => {
    //const auth = getAuth();
    login(email, password);
  };

  return (
    <Modal transparent={false} animationType="slide" style={styles.loginModal}>
      <View style={styles.modalOverlay}>
        <View style={styles.headingTextView}>
          <Text style={styles.headingText}>Hello</Text>
          <Text style={styles.headingText}>Sign in!</Text>
        </View>
        <LinearGradient
          colors={["#56a34d", "#a2bf4c", "#f8de4b"]}
          end={{ x: 1.5, y: 2 }}
          style={styles.createAccountView}
        >
          <View>
            <Pressable style={styles.exitButton} onPress={onClose}>
              <Image
                source={require("../assets/icons/Arrow_alt_left.png")}
                style={styles.exitIcon}
              />
            </Pressable>
          </View>
          <View style={styles.credentialsView}>
            <View style={styles.usernameContainer}>
              <Text style={styles.emailLabel}>Email</Text>
              <TextInput
                placeholder="JohnDoe@gmail.com"
                style={styles.userTextInput}
                onChangeText={setEmail}
              />
            </View>
            <View style={styles.usernameContainer}>
              <Text style={styles.emailLabel}>Password</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.userTextInput}
                onChangeText={setPassword}
              />
            </View>
            <Text style={styles.forgotPassText}> Forgot password?</Text>
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.signUpTextContainer}>
            <Text style={styles.signUpText1}>Don't have an account?</Text>
            <Text style={styles.signUpText2} onPress={onSwitch}>
              Sign up
            </Text>
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
};

export default LoginScreen;
