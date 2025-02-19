import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
class AccountHandler {
  constructor() {}
}

function createAccount(email, password) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("user created: ", user);
      return true;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      return false;
      // ..
    });
}

function login(email, password) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      //const user = userCredential.user;
      // ...
      console.log("user logged in");
      return true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      return false;
    });
}

async function changePassword(newPassword) {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    alert("No user is signed in. Please log in first.");
    return;
  }
  console.log(newPassword);

  updatePassword(user, newPassword)
    .then(() => {
      // Update successful.
      alert("password change");
    })
    .catch((error) => {
      // An error ocurred
      handleFirebaseError(error);
    });
}

function handelPasswordReset(currPassword, newPassword) {
  // TODO(you): prompt the user to re-provide their sign-in credentials

  const auth = getAuth();

  const user = auth.currentUser;
  const credential = EmailAuthProvider.credential(user.email, currPassword);
  if (newPassword.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }
  reauthenticateWithCredential(user, credential)
    .then(() => {
      // User re-authenticated.
      console.log("reauth. user");

      changePassword(newPassword);
    })
    .catch((error) => {
      // An error ocurred
      handleFirebaseError(error);
      console.log(error);
    });
}

// Function to handle Firebase errors
const handleFirebaseError = (error) => {
  let message = "An unknown error occurred.";

  switch (error.code) {
    case "auth/wrong-password":
      message = "The current password you entered is incorrect.";
      break;
    case "auth/user-not-found":
      message = "No user found with this email.";
      break;
    case "auth/weak-password":
      message = "The new password is too weak. Choose a stronger password.";
      break;
    case "auth/requires-recent-login":
      message =
        "This operation requires recent login. Please log out and log in again.";
      break;
    case "auth/too-many-requests":
      message = "Too many attempts. Try again later.";
      break;
    case "auth/network-request-failed":
      message = "Network error. Check your internet connection.";
      break;
    case "auth/invalid-credential":
      message = "The current password you entered is incorrect.";
      break;
    default:
      message = error.message; // Use the default Firebase error message
  }
  alert(message);
};

export {
  AccountHandler,
  createAccount,
  login,
  changePassword,
  handelPasswordReset,
};
