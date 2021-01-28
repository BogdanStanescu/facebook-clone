// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase, { firestore } from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCJP_TtS3u56sAHN6T9ER8hMlxbY3CUVDs",
    authDomain: "facebook-clone-fbfc8.firebaseapp.com",
    databaseURL: "https://facebook-clone-fbfc8.firebaseio.com",
    projectId: "facebook-clone-fbfc8",
    storageBucket: "facebook-clone-fbfc8.appspot.com",
    messagingSenderId: "1022372319962",
    appId: "1:1022372319962:web:10f8cdff1f09cdeb880be3",
    measurementId: "G-1S34J71JRT"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;