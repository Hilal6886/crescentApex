import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import {
  collection,
  getFirestore,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { app } from '../firebase';

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Sign in with Google
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;

    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      // If the user doesn't exist in Firestore, add them
      await setDoc(userRef, {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  } catch (error) {
    console.error('Error signing in with Google:', error);
    alert('Failed to sign in with Google. Please try again.');
  }
};

// Log in with email and password
const logInWithEmailAndPassword = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;

    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      // If the user doesn't exist in Firestore, add them
      await setDoc(userRef, {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  } catch (err) {
    console.error('Error logging in with email and password:', err);
    alert('Failed to log in. Please check your credentials and try again.');
  }
};

// Register with email and password
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      // If the user doesn't exist in Firestore, add them
      await setDoc(userRef, {
        uid: user.uid,
        displayName: name, // Use the provided name for displayName
        email: user.email,
        photoURL: user.photoURL,
      });
    }

    return res;
  } catch (err) {
    console.error('Error registering with email and password:', err);
    alert('Failed to register. Please try again.');
    throw err;
  }
};

// Send a password reset email
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert('Password reset link sent to your email!');
  } catch (err) {
    console.error('Error sending password reset email:', err);
    alert('Failed to send password reset email. Please try again.');
  }
};

// Logout the current user
const logout = () => {
  try {
    signOut(auth);
    alert('Successfully logged out.');
  } catch (err) {
    console.error('Error logging out:', err);
    alert('Failed to log out. Please try again.');
  }
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  sendEmailVerification,
};
