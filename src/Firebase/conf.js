
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCCdgisV97mvPdDqBAbxdCNaFqTCb9HKAs",
  authDomain: "dndmobile-e8252.firebaseapp.com",
  projectId: "dndmobile-e8252",
  storageBucket: "dndmobile-e8252.appspot.com",
  messagingSenderId: "77982866499",
  appId: "1:77982866499:web:49c210f8e0ce149cf608f6"
};


const app = initializeApp(firebaseConfig);

const auth_mod = getAuth(app);

export {auth_mod}