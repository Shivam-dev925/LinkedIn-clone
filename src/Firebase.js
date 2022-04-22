import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVW0v0usrRh3ZHtx8Nbh9gNz9VXEY1RCo",
  authDomain: "testing-cca94.firebaseapp.com",
  projectId: "testing-cca94",
  storageBucket: "testing-cca94.appspot.com",
  messagingSenderId: "305698742525",
  appId: "1:305698742525:web:4b8f8902d6a5ca16555e94",
  measurementId: "G-P45PXLSSCF",
};

const application = firebase.initializeApp(firebaseConfig);

const database = application.firestore();

export { database };

