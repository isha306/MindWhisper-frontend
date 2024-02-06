
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAWO1O7M4QF4XEPEZ8Y18Lg7H8jXxKVCrk",
  authDomain: "mindwhisper-98cf5.firebaseapp.com",
  projectId: "mindwhisper-98cf5",
  storageBucket: "mindwhisper-98cf5.appspot.com",
  messagingSenderId: "339612769781",
  appId: "1:339612769781:web:a7f48349a2b41f2a2fd4bc",
  measurementId: "G-QK2PS9S88D"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {analytics}