// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCziUOEcgRuGsu99FaG_URtiV94_ttMIBI",
  authDomain: "ifad-autos.firebaseapp.com",
  projectId: "ifad-autos",
  storageBucket: "ifad-autos.appspot.com",
  messagingSenderId: "853780878271",
  appId: "1:853780878271:web:26c7ba6a2f091a6f2bc70a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth