import firebase from './firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6MTIvNvoBRVW-_dYsOO8VtB2sPzEH1F8",
    authDomain: "discord-app-60bb0.firebaseapp.com",
    databaseURL: "https://discord-app-60bb0.firebaseio.com",
    projectId: "discord-app-60bb0",
    storageBucket: "discord-app-60bb0.appspot.com",
    messagingSenderId: "990376320578",
    appId: "1:990376320578:web:6736708f7d8021e59f57db",
    measurementId: "G-M0F72YCZC1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;

