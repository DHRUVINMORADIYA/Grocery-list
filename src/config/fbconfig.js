import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAechiWkXDnJQZITID_T_RkEg6xCfbNVwc",
  authDomain: "groceries-410.firebaseapp.com",
  projectId: "groceries-410",
  storageBucket: "groceries-410.appspot.com",
  messagingSenderId: "120630237043",
  appId: "1:120630237043:web:f1fb4b48db28ab8b519706",
  measurementId: "G-G13TMGW8DQ",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
