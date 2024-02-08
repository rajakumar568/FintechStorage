import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCNIJ9mhjequeke286pDE6BWKlGia4HBNk",
  authDomain: "fintech-storage.firebaseapp.com",
  projectId: "fintech-storage",
  storageBucket: "fintech-storage.appspot.com",
  messagingSenderId: "441439216842",
  appId: "1:441439216842:web:a4ba0a5546066a7d544033",
  measurementId: "G-4XSD5SHK3R"
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

if(firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export {firebase};