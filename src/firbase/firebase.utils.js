import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyB5T7-YVCwfrl1IJhlKo0vLZ-MEZbPd_DY",
  authDomain: "online-shop-573a2.firebaseapp.com",
  projectId: "online-shop-573a2",
  storageBucket: "online-shop-573a2.appspot.com",
  messagingSenderId: "29277887079",
  appId: "1:29277887079:web:f3345ac185aa397d8652c2",
  measurementId: "G-S2QXGVJ87P",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(`Error happened ${err.message}`);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
