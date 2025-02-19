import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createAccount } from "../components/AccountDataHandler";
import styles from "../assets/Styles/CreateAccountScreenStyles";

const CreateAccountScreen = ({ onClose, onSwitch }) => {
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [validCred, setValidCred] = useState(false);

  const checkMatch = () => {
    if (pass1 == pass2) {
      setValidCred(true);
      setPassword(pass1);
      console.log("passwords match");
    } else {
      setValidCred(false);
      console.log("passwords dont match");
    }
  };

  useEffect(() => {
    checkMatch();
  }, [pass1, pass2]);

  const onSignUp = () => {
    if (validCred) {
      createAccount(email, pass1);
    } else {
      console.log("credentails not valid");
    }
  };

  return (
    <Modal transparent={false} animationType="slide" style={styles.loginModal}>
      <SafeAreaView style={styles.modalOverlay}>
        <View style={styles.headingTextView}>
          <Text style={styles.headingText}>Create Your</Text>
          <Text style={styles.headingText}>Account</Text>
        </View>
        <LinearGradient
          style={styles.createAccountView}
          colors={["#56a34d", "#a2bf4c", "#f8de4b"]}
          end={{ x: 1.5, y: 2 }}
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
                onChangeText={setPass1}
              />
            </View>
            <View style={styles.usernameContainer}>
              <Text style={styles.emailLabel}>Renter password</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.userTextInput}
                onChangeText={setPass2}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.signUpButton} onPress={onSignUp}>
            <Text style={styles.signUpButtonText}>Sign up</Text>
          </TouchableOpacity>
          <View style={styles.signUpTextContainer}>
            <Text style={styles.signInText1}>Have an account already?</Text>
            <Text style={styles.signInText2} onPress={onSwitch}>
              Sign in
            </Text>
          </View>
        </LinearGradient>
      </SafeAreaView>
    </Modal>
  );
};

export default CreateAccountScreen;
