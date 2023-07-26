import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";
import { addDoc } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAv3cE5ntFjJwhBfOLhowdnjWIuvA7Qadc",
  authDomain: "turkmed-b9c4d.firebaseapp.com",
  databaseURL:
    "https://turkmed-b9c4d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "turkmed-b9c4d",
  storageBucket: "turkmed-b9c4d.appspot.com",
  messagingSenderId: "148394040656",
  appId: "1:148394040656:web:c43c323a3a412a5e0f6055",
  measurementId: "G-E9Z501W3W7",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

async function setService() {
  const collectionRef = collection(db, "services");
  console.log(collectionRef);
  await addDoc(collectionRef, { ff: "sdad" }); 
}

export { setService };
