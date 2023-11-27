
import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAdGnmczcQCLnTsb1X20MFm8XFQeMn2VXo",
  authDomain: "projeto-982b7.firebaseapp.com",
  projectId: "projeto-982b7",
  storageBucket: "projeto-982b7.appspot.com",
  messagingSenderId: "703874185763",
  appId: "1:703874185763:web:9e2a8cde24e4826e40cf96",
  measurementId: "G-0HSXV3Z5PD"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, auth, storage }