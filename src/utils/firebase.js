// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWc3COacC6J6lO_veWh_EJcy6mS0eYKos",
  authDomain: "netflix-gpt-7b06d.firebaseapp.com",
  projectId: "netflix-gpt-7b06d",
  storageBucket: "netflix-gpt-7b06d.appspot.com",
  messagingSenderId: "966140363722",
  appId: "1:966140363722:web:585502d3b8b2ee5cf08533",
  measurementId: "G-FN82EKTFDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
