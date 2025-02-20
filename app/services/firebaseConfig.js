// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// ✅ Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1i_ZGni0pth9HJc_fkiNy3a_1oKsh-jc",
  authDomain: "expire-8517d.firebaseapp.com",
  projectId: "expire-8517d",
  storageBucket: "expire-8517d.appspot.com",
  messagingSenderId: "417679769748",
  appId: "1:417679769748:web:c7166a4dd3bc4663de7481",
  measurementId: "G-PWYKSDQ4PD",
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Enable persistent authentication
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
