import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDwDfa8j1xrz4VB1aexqiT4BOv37MJi4_k",
  authDomain: "facebook-clone-7c8e5.firebaseapp.com",
  databaseURL: "https://facebook-clone-7c8e5.firebaseio.com",
  projectId: "facebook-clone-7c8e5",
  storageBucket: "facebook-clone-7c8e5.appspot.com",
  messagingSenderId: "86142583695",
  appId: "1:86142583695:web:aeaf7a24afb89d454c81fa",
  measurementId: "G-SSHNW88P6H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;