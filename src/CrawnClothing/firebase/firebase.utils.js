import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAyer54hR6Hn7-kizrzVxkl6U5OHphxFCg",
    authDomain: "react-master-class-f1560.firebaseapp.com",
    projectId: "react-master-class-f1560",
    storageBucket: "react-master-class-f1560.appspot.com",
    messagingSenderId: "969216807942",
    appId: "1:969216807942:web:45911f99c4c07dbad79f87",
    measurementId: "G-N8MCEZ1GVT"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;