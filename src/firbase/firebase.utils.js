import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

/* const config = {
  apiKey: "AIzaSyB5T7-YVCwfrl1IJhlKo0vLZ-MEZbPd_DY",
  authDomain: "online-shop-573a2.firebaseapp.com",
  projectId: "online-shop-573a2",
  storageBucket: "online-shop-573a2.appspot.com",
  messagingSenderId: "29277887079",
  appId: "1:29277887079:web:f3345ac185aa397d8652c2",
  measurementId: "G-S2QXGVJ87P",
}; */

const config = {
  apiKey: "AIzaSyBUwCXBuXvB6rhSnumdcp-KXptamY7k0PI",
  authDomain: "second-shop-20c2f.firebaseapp.com",
  projectId: "second-shop-20c2f",
  storageBucket: "second-shop-20c2f.appspot.com",
  messagingSenderId: "105803569258",
  appId: "1:105803569258:web:c9cdb0d79757fbd3c7d213",
  measurementId: "G-G91G9800XH",
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

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const newCollectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocumentRef = newCollectionRef.doc();
    batch.set(newDocumentRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collection) => {
  const transformedCollection = collection.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      id: doc.id,
      items,
      routeName: encodeURI(title.toLowerCase()),
      title,
    };
  });
  console.log(transformedCollection);

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};
