import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
{
    apiKey: "AIzaSyBVHJFP-yR4Am56TEcy5WYGsdEnHEOBszM",
    authDomain: "crwndb-1eb4d.firebaseapp.com",
    databaseURL: "https://crwndb-1eb4d.firebaseio.com",
    projectId: "crwndb-1eb4d",
    storageBucket: "crwndb-1eb4d.appspot.com",
    messagingSenderId: "183301718027",
    appId: "1:183301718027:web:4ffd9b6579faee2afb470e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;