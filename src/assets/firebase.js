import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAlVcsGfWiK71l85III8YfE42nntiGJtyM",
  authDomain: "imagecenterforwebsite.firebaseapp.com",
  projectId: "imagecenterforwebsite",
  storageBucket: "imagecenterforwebsite.appspot.com",
  messagingSenderId: "760499301735",
  appId: "1:760499301735:web:cb60d225340ae275df13c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
