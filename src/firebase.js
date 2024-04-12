// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKu12EJNOGWV5rhCJLh7_yLOqTJG_fMXI",
  authDomain: "lukassauldev.firebaseapp.com",
  projectId: "lukassauldev",
  storageBucket: "lukassauldev.appspot.com",
  messagingSenderId: "194459906439",
  appId: "1:194459906439:web:df5ca8dc702ed40abb2322",
  measurementId: "G-58YGDQXZ3L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// export firebase db
export const db = getFirestore(app);
