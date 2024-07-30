 
import { initializeApp } from "firebase/app";


import { getAuth} from "firebase/auth";
import{getFirestore} from 'firebase/firestore';


import { getStorage, ref } from 'firebase/storage';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZt4C5thvczPppMA4OByVLxbIfFvT5UHk",
  authDomain: "crescentapex-3b135.firebaseapp.com",
  projectId: "crescentapex-3b135",
  storageBucket: "crescentapex-3b135.appspot.com",
  messagingSenderId: "1083647531691",
  appId: "1:1083647531691:web:df3a22e3c48f4e1bfeb5ee",
  measurementId: "G-NW4DKDMFPD"
};


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);
  const firestore = getFirestore(app);
  
  export { app, auth, db, storage, ref,firestore  };


 