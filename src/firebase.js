import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBCDk8kzK1376hPt5FKRlKejCrE_qoTJmE",
  authDomain: "netflix-clone-d3649.firebaseapp.com",
  projectId: "netflix-clone-d3649",
  storageBucket: "netflix-clone-d3649.appspot.com",
  messagingSenderId: "722387955160",
  appId: "1:722387955160:web:29f69cac15114bb7b5d6ad"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "user"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (error) {
      console.log(error);
      toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log(error);
      toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = () => {
  signOut(auth);
}

export {auth, db, login, signup, logout};